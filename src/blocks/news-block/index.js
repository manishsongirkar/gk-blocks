/**
 * Block: News Block
 *
 * Custom block to show default news block.
 *
 * @since   0.1.0
 * @package Gk_Blocks
 */

const { __ }                = wp.i18n;
const { registerBlockType } = wp.blocks;
const { PostSelectButton }  = hm.components;
const { decodeEntities }    = wp.htmlEntities;
const {	InspectorControls } = wp.editor;

const {
	ToggleControl,
	PanelBody,
	PanelRow,
	Button,
	SelectControl,
} = wp.components;

import classnames from 'classnames';

const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

let dateObj;

// Format the date in required format.
const dateFormat = ( date ) => {

	dateObj = new Date( date );

	return `${months[dateObj.getMonth()]} ${dateObj.getDate()}, ${dateObj.getFullYear()}`;

};

// Post type options
const postTypeOptions = [
	{ value: 'post', label: __( 'Post', 'atomic-blocks' ) },
	{ value: 'page', label: __( 'Page', 'atomic-blocks' ) },
];

function Inspector( props ) {
	const { setAttributes, attributes: { showMeta, showExcerpt, postType } } = props;
	const isPost = postType === 'post';

	return (
		<InspectorControls key="inspector">
			<PanelBody title={ __( 'Post and Page Settings' ) }>
				<PanelRow>
					<SelectControl
						label={ __( 'Content Type', 'atomic-blocks' ) }
						options={ postTypeOptions }
						value={ postType }
						onChange={ ( value ) => setAttributes( { postType: value } ) }
					/>
				</PanelRow>
				<PanelRow>
					{ isPost &&
						<ToggleControl
							label={ __( 'Display Meta' ) }
							description={ __( 'Show the post meta or not.' ) }
							checked={ showMeta }
							onChange={ ( value ) => setAttributes( { showMeta: value } ) }
						/>
					}
				</PanelRow>

				<PanelRow>
					{
						isPost &&
						<ToggleControl
							label={__( 'Display Excerpt' )}
							description={__( 'Show the post excerpt or not.' )}
							checked={showExcerpt}
							onChange={( value ) => setAttributes( { showExcerpt : value } )}
						/>
					}
				</PanelRow>
			</PanelBody>
		</InspectorControls>
	);

}

registerBlockType(
	'gk-blocks/news',
	{
		title: __( 'News' ),
		icon: 'admin-post',
		category: 'common',
		keywords: [ __( 'News' ) ],

		supports: {
			align: [ 'wide' ],
		},

		styles: [
			{
				name: 'featured',
				label: __( 'Featured' ),
				isDefault: true
		},
			{
				name: 'list-type',
				label: __( 'List Type' )
		},
			{
				name: 'thumb-type',
				label: __( 'Thumb Type' )
		}
		],

		attributes: {
			align: {
				type: 'string',
				default: 'wide'
			},

			postIds: {
				type: 'array',
				default: [],
			},

			postType: {
				type: 'string',
				default: 'post',
			},

			posts: {
				type: 'array',
				default: [],
			},

			showMeta: {
				type: 'boolean',
				default: false,
			},

			showExcerpt: {
				type: 'boolean',
				default: false,
			},
		},

		edit: ( props ) => {

			const {
				attributes: {
					postType,
					postIds,
					posts,
					showMeta,
					showExcerpt,
				},
				setAttributes
			} = props;

			const isPost = postType === 'post';

			return [
				<Inspector key="inspector" { ...{ setAttributes, postTypeOptions, ...props } } />,
				<div key="edit" className={ classnames( 'news-block', props.className ) }>
					<PostSelectButton
						value    = { postIds }
						onSelect = { posts => {
							setAttributes( { posts } );
							setAttributes( { postIds: posts.map( p => p.id ) } )
						} }
						postType = { postType }
						btnProps = { { isLarge: true } }
					>
						{ __( 'Select posts' ) }
					</PostSelectButton>

					{
						posts ? posts.map( ( post ) => {
							return [
								<div className="row">

									{
										post.media ? <div className="small-12 columns news-thumbnail position-relative">
											<a href={post.link} title={post.title.rendered} className="entry-thumb">
												<img src={post.media} alt={post.title.rendered} />
											</a>
										</div> : null
									}

									<div className="small-12 columns news-details position-relative">

										<h2 className="news-title">
											<a href={ post.link } title={ post.title.rendered } rel="bookmark">{ decodeEntities( post.title.rendered ) }</a>
										</h2>

										{
											isPost && showMeta ? <div className="news-meta">
												<div className="byline-container">
													{ __( 'By' ) } <span className="author vcard gk-author">{ post.author_name }</span> • <span className="post-date"><time>{ dateFormat( post.date ) }</time></span>
												</div>
											</div> : null
										}

										{ isPost && showExcerpt ? <div className="m-article-featured__excerpt" dangerouslySetInnerHTML={{ __html : post.excerpt }}></div> : null }

									</div>
								</div>,
								<Button
									onClick = {
										() => {
											setAttributes( { posts: [ ...posts.filter( item => item.id !== post.id ) ] } );
											setAttributes( { postIds: [ ...postIds.filter( item => item !== post.id ) ] } )
										}
									}
								>
									{ __( 'Remove' ) }
								</Button>
							];
						} ) : __( 'No Post Selected!' )
					}
				</div>
			];
		},

		save: ( props ) => {
			const { attributes: { posts, showMeta, showExcerpt } } = props;

			return (
				<div className={ classnames( 'news-block', props.className ) }>
					{
						posts.map( ( post ) => {
							return (
								<div className="row">

									{
										post.media ? <div className="small-12 columns news-thumbnail position-relative">
											<a href={post.link} title={post.title.rendered} className="entry-thumb">
												<img src={post.media} alt={post.title.rendered} />
											</a>
										</div> : null
									}

									<div className="small-12 columns news-details position-relative">

										<h2 className="news-title">
											<a href={ post.link } title={ post.title.rendered } rel="bookmark">{ decodeEntities( post.title.rendered ) }</a>
										</h2>

										{
											showMeta ? <div className="news-meta">
												<div className="byline-container">
													{ __( 'By' ) } <span className="author vcard gk-author">{ post.author_name }</span> • <span className="post-date"><time>{ dateFormat( post.date ) }</time></span>
												</div>
											</div> : null
										}

										{ showExcerpt ? <p className="hide-for-small-only m-article-featured__excerpt" dangerouslySetInnerHTML={{ __html : post.excerpt }}></p> : null }

									</div>
								</div>
							);
						} )
					}
				</div>
			);
		},
	}
);
