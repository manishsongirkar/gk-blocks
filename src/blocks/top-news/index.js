/**
 * Block: Top News
 *
 * Custom block to show top news section.
 *
 * @since   0.1.0
 * @package News_Blocks
 */

const { __ }                = wp.i18n;
const { registerBlockType } = wp.blocks;
const { PostSelectButton }  = hm.components;
const { decodeEntities }    = wp.htmlEntities;
const { Button }            = wp.components;

const {
	RichText,
	InnerBlocks
} = wp.editor;

import classnames from 'classnames';

const ALLOWED_BLOCKS = [ 'core/shortcode' ];

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

// Common article layout for backend.
const editArticle = ( post, index, posts, postIds, setAttributes ) => (
	<div className={ 0 === index ? `m-article m-block-link m-article-featured large-featured type-post` : `m-article m-block-link m-article-wide large-wide type-post` }>
		<div className="row">

			<div className={ 0 === index ? `m-article-featured__thumb small-12 columns position-relative` : `m-article-wide__thumb shrink columns position-relative` }>
				<a href={ post.link } title={ post.title.rendered } className="entry-thumb">
					<img src={ post.media } alt={ post.title.rendered } />
				</a>
			</div>

			<div className={ 0 === index ? `m-article-featured__inner columns` : `m-article-wide__inner columns` }>

				<h2 className={ 0 === index ? `m-article-featured__title entry-title` : `m-article-wide__title entry-title` }>
					<a href={ post.link } title={ post.title.rendered } rel="bookmark">{ decodeEntities( post.title.rendered ) }</a>
				</h2>

				<div className={ 0 === index ? `m-article-featured__detail` : `m-article-wide__detail` }>
					<div className="byline-container">
						{ __( 'By' ) } <span className="author vcard news-author">{ post.author_name }</span> • <span className="post-date"><time>{ dateFormat( post.date ) }</time></span>
					</div>
				</div>

				{ 0 === index ? <p className="hide-for-small-only m-article-featured__excerpt" dangerouslySetInnerHTML={{ __html : post.excerpt }}></p> : '' }

			</div>
		</div>
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
	</div>
);

// Common article layout for frontend.
const article = ( post, index ) => (

	<div className={ 0 === index ? `m-article m-block-link m-article-featured large-featured type-post` : `m-article m-block-link m-article-wide large-wide type-post` }>

		<div className="row">

			<div className={ 0 === index ? `m-article-featured__thumb small-12 columns position-relative` : `m-article-wide__thumb shrink columns position-relative` }>
				<a href={post.link} title={post.title.rendered} className="entry-thumb">
					<img src={post.media} alt={post.title.rendered} />
				</a>
			</div>

			<div className={ 0 === index ? `m-article-featured__inner columns` : `m-article-wide__inner columns` }>

				<h2 className={ 0 === index ? `m-article-featured__title entry-title` : `m-article-wide__title entry-title` }>
					<a href={post.link} title={post.title.rendered} rel="bookmark">{post.title.rendered}</a>
				</h2>

				<div className={ 0 === index ? `m-article-featured__detail` : `m-article-wide__detail` }>
					<div className="byline-container">
						{ __( 'By' ) } <span className="author vcard news-author">{post.author_name}</span> • <span className="post-date"><time>{ dateFormat( post.date ) }</time></span>
					</div>
				</div>

				{ 0 === index ? <p className="hide-for-small-only m-article-featured__excerpt" dangerouslySetInnerHTML={{ __html : post.excerpt }}></p> : '' }

			</div>
		</div>
	</div>

);

registerBlockType(
	'news-blocks/top-news',
	{
		title: __( 'Top News' ),
		icon: 'admin-post',
		category: 'common',
		keywords: [ __( 'Top News' ) ],
		supports: {
			align: [ 'wide' ],
		},

		attributes: {
			align: {
				type: 'string',
				default: 'wide'
			},

			postIds: {
				type: 'array',
				default: [],
			},

			posts: {
				type: 'array',
				default: [],
			},

			sectionTitle: {
				source: 'html',
				selector: '.title',
			}
		},

		edit: ( props ) => {

			const {
				attributes: {
					postIds,
					posts,
					sectionTitle
				},
				setAttributes
			} = props;

			const [ editFirst, ...editRest] = posts;

			return [
				<section key="edit" className={ classnames( 'm-listing', 'news-primary-listing', props.className ) }>
					<div className="row">
						<div className="medium-9 small-12 columns top-story-title">
							<RichText
								tagName="h2"
								placeholder={ __( 'Add title…' ) }
								value={ sectionTitle }
								className="title"
								onChange={ ( value ) => setAttributes( { sectionTitle: value } ) }
								formattingControls={ [] }
							/>
						</div>

						<div className="medium-3 small-12 columns">
							<PostSelectButton
								value    = { postIds }
								onSelect = { posts => {
									setAttributes( { posts } );
									setAttributes( { postIds: posts.map( p => p.id ) } )
								} }
								postType = "post"
								maxPosts = {5}
								btnProps = { { isLarge: true } }
							>
								{ __( 'Select posts' ) }
							</PostSelectButton>
						</div>

						<div className="medium-5 small-12 columns medium-order-2 has-heading">
							{
								editFirst ? editArticle( editFirst, 0, posts, postIds, setAttributes ) : __( 'No Post Selected!' )
							}
						</div>

						<div className="medium-4 small-12 columns medium-order-1">
							{
								editRest ? editRest.map( ( post ) => {
									return (
										editArticle( post, 1, posts, postIds, setAttributes )
									);
								} ) : __( 'No Post Selected!' )
							}
						</div>
						<div className="medium-3 columns medium-order-3 text-center primary-section-placeholder has-heading">
							<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
						</div>
					</div>
				</section>
			];
		},

		save: ( props ) => {
			const { attributes: { sectionTitle, posts } } = props;

			// Array Destructuring.
			const [ first, ...rest] = posts;

			return (
				<section className={ classnames( 'm-listing', 'news-primary-listing', props.className ) }>
					<div className="row">
						<div className="medium-9 small-12 columns top-story-title">
							<RichText.Content
								tagName="h4"
								className={ classnames(
									'title',
								) }
								value={ sectionTitle }
							/>
						</div>

						<div className="medium-5 small-12 columns medium-order-2 has-heading">
							{
								article( first, 0 )
							}
						</div>
						<div className="medium-4 small-12 columns medium-order-1">
							{
								rest.map( ( post ) => {
									return (
										article( post, 1 )
									);
								} )
							}
						</div>
						<div className="medium-3 columns medium-order-3 text-center primary-section-placeholder has-heading">
							<InnerBlocks.Content />
						</div>
					</div>
				</section>
			);
		},
	}
);
