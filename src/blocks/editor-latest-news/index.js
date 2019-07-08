/**
 * Block: Editors picks & Latest News
 *
 * Custom block to show Latest news and Editors picks section.
 *
 * @since   0.1.0
 * @package Gk_Blocks
 */

const { __ }               = wp.i18n;
const { PostSelectButton } = hm.components;
const { decodeEntities }   = wp.htmlEntities;
const { Button }           = wp.components;
const { RichText }         = wp.editor;

const {
	registerBlockType,
	registerBlockStyle
} = wp.blocks;

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

// Common article layout for backend.
const editLatestArticle = ( post, index, latestPosts, latestPostIds, setAttributes ) => (

	<div className="m-article m-block-link m-article-wide type-post">
		<div className="row">
			<div className=" m-article-wide__thumb shrink columns position-relative">
				<a href={post.link} title={post.title.rendered} className="entry-thumb">
					<img src={post.media} alt={post.title.rendered} />
				</a>
			</div>

			<div className="m-article-wide__inner columns">
				<h2 className="m-article-wide__title entry-title">
					<a href={ post.link } title={ post.title.rendered } rel="bookmark">{ decodeEntities( post.title.rendered ) }</a>
				</h2>

				<div className="m-article-wide__detail show-for-small-only">
					<div className="byline-container">
						{ __( 'By' ) } <span className="author vcard gk-author">{post.author_name}</span> • <span className="post-date"><time>{ dateFormat( post.date ) }</time></span>
					</div>
				</div>
			</div>
		</div>
		<Button
			onClick = {
				() => {
					setAttributes( { latestPosts: [ ...latestPosts.filter( item => item.id !== post.id ) ] } );
					setAttributes( { latestPostIds: [ ...latestPostIds.filter( item => item !== post.id ) ] } )
				}
			}
		>
			{ __( 'Remove' ) }
		</Button>
	</div>

);

// Common article layout for frontend.
const latestArticle = ( post, index ) => (

	<div className="m-article m-block-link m-article-wide type-post">
		<div className="row">
			<div className=" m-article-wide__thumb shrink columns position-relative">
				<a href={post.link} title={post.title.rendered} className="entry-thumb">
					<img src={post.media} alt={post.title.rendered} />
				</a>
			</div>

			<div className="m-article-wide__inner columns">
				<h2 className="m-article-wide__title entry-title">
					<a href={post.link} title={post.title.rendered} rel="bookmark">{post.title.rendered}</a>
				</h2>

				<div className="m-article-wide__detail show-for-small-only">
					<div className="byline-container">
						{ __( 'By' ) } <span className="author vcard gk-author">{post.author_name}</span> • <span className="post-date"><time>{ dateFormat( post.date ) }</time></span>
					</div>
				</div>
			</div>
		</div>
	</div>

);

const editEditorFirstPost = ( post, index, editorPosts, editorPostIds, setAttributes ) => (

	<div className="m-article m-block-link m-article-featured type-post">

		<div className="row">

			<div className="m-article-featured__thumb small-12 columns position-relative">
				<a href={post.link} title={post.title.rendered} className="entry-thumb">
					<img src={post.media} alt={post.title.rendered} />
				</a>
			</div>

			<div className="m-article-featured__inner columns">
				<h1 className="m-article-featured__title entry-title">
					<a href={post.link} title={post.title.rendered} rel="bookmark">{ decodeEntities( post.title.rendered ) }</a>
				</h1>

				<div className="m-article-featured__detail">
					<div className="byline-container">
						{ __( 'By' ) } <span className="author vcard gk-author">{post.author_name}</span> • <span className="post-date"><time>{ dateFormat( post.date ) }</time></span>
					</div>
				</div>

				{ 0 === index ? <p className="hide-for-small-only m-article-featured__excerpt" dangerouslySetInnerHTML={{ __html : post.excerpt }}></p> : '' }

			</div>

		</div>

		<Button
			onClick = {
				() => {
					setAttributes( { editorPosts: [ ...editorPosts.filter( item => item.id !== post.id ) ] } );
					setAttributes( { editorPostIds: [ ...editorPostIds.filter( item => item !== post.id ) ] } )
				}
			}
		>
			{ __( 'Remove' ) }
		</Button>

	</div>

);

const editorFirstPost = ( post, index, editorPosts, editorPostIds, setAttributes ) => (

	<div className="m-article m-block-link m-article-featured type-post">

		<div className="row">

			<div className="m-article-featured__thumb small-12 columns position-relative">
				<a href={post.link} title={post.title.rendered} className="entry-thumb">
					<img src={post.media} alt={post.title.rendered} />
				</a>
			</div>

			<div className="m-article-featured__inner columns">
				<h1 className="m-article-featured__title entry-title">
					<a href={post.link} title={post.title.rendered} rel="bookmark">{ decodeEntities( post.title.rendered ) }</a>
				</h1>

				<div className="m-article-featured__detail">
					<div className="byline-container">
						{ __( 'By' ) } <span className="author vcard gk-author">{post.author_name}</span> • <span className="post-date"><time>{ dateFormat( post.date ) }</time></span>
					</div>
				</div>

				{ 0 === index ? <p className="hide-for-small-only m-article-featured__excerpt" dangerouslySetInnerHTML={{ __html : post.excerpt }}></p> : '' }

			</div>

		</div>

		<Button
			onClick = {
				() => {
					setAttributes( { editorPosts: [ ...editorPosts.filter( item => item.id !== post.id ) ] } );
					setAttributes( { editorPostIds: [ ...editorPostIds.filter( item => item !== post.id ) ] } )
				}
			}
		>
			{ __( 'Remove' ) }
		</Button>

	</div>

);

const editEditorMiddlePost = ( post, index ) => (
	<div className="m-article m-block-link m-article-wide type-post">

		<div className="row">
			<div className="m-article-wide__thumb shrink columns position-relative">
				<a href={post.link} title={post.title.rendered} className="entry-thumb">
					<img src={post.media} alt={post.title.rendered} />
				</a>
			</div>
			<div className="m-article-wide__inner columns">

				<h2 className="m-article-wide__title entry-title">
					<a href={post.link} title={post.title.rendered} rel="bookmark">{post.title.rendered}</a>
				</h2>
			</div>
		</div>

	</div>
);

const editorMiddlePost = ( post, index ) => (
	<div className="m-article m-block-link m-article-wide type-post">

		<div className="row">
			<div className="m-article-wide__thumb shrink columns position-relative">
				<a href={post.link} title={post.title.rendered} className="entry-thumb">
					<img src={post.media} alt={post.title.rendered} />
				</a>
			</div>
			<div className="m-article-wide__inner columns">

				<h2 className="m-article-wide__title entry-title">
					<a href={post.link} title={post.title.rendered} rel="bookmark">{post.title.rendered}</a>
				</h2>
			</div>
		</div>

	</div>
);

registerBlockStyle( 'gk-blocks/editor-latest-news', {
	name: 'blue-paragraph',
	label: 'Blue Paragraph'
} );

registerBlockType(
	'gk-blocks/editor-latest-news',
	{
		title: __( 'Editor & Latest News' ),
		icon: 'admin-post',
		category: 'common',
		keywords: [ __( 'Editor\'s Picks' ), __( 'Latest News' ) ],
		supports: {
			align: [ 'wide' ],
		},

		attributes: {
			align: {
				type: 'string',
				default: 'wide'
			},

			latestPostIds: {
				type: 'array',
				default: [],
			},

			latestPosts: {
				type: 'array',
				default: [],
			},

			editorPostIds: {
				type: 'array',
				default: [],
			},

			editorPosts: {
				type: 'array',
				default: [],
			},

			sectionTitle: {
				source: 'html',
				selector: '.latest-news-title',
			},

			editorSectionTitle: {
				source: 'html',
				selector: '.editor-pick-title',
			}
		},

		edit: ( props ) => {

			const {
				attributes: {
					latestPostIds,
					latestPosts,
					editorPostIds,
					editorPosts,
					sectionTitle,
					editorSectionTitle
				},
				setAttributes
			} = props;

			const editor_1    = editorPosts.slice( 0, 1 );
			const editor_2_4  = editorPosts.slice( 2, 4 );
			const editor_rest = editorPosts.slice( 5 );

			const editor_01 = editor_1.reduce( function ( result, item, index ) {
				result[index] = item;
				return result;
			}, {} );

			return [
				<section key="edit" className={ classnames( 'm-listing', 'editor-with-latest-listing', props.className ) }>
					<div className="row">
						<div className="small-12 medium-4 columns">
							<div className="m-listing-header">
								<div className="row align-middle ">
									<div className="columns">
										<RichText
											tagName="span"
											placeholder={ __( 'Add title…' ) }
											value={ sectionTitle }
											className="m-listing-header__head latest-news-title"
											onChange={ ( value ) => setAttributes( { sectionTitle: value } ) }
											formattingControls={ [] }
										/>
									</div>
								</div>
								<PostSelectButton
									value    = { latestPostIds }
									onSelect = { latestPosts => {
										setAttributes( { latestPosts } );
										setAttributes( { latestPostIds: latestPosts.map( p => p.id ) } )
									} }
									postType = "post"
									maxPosts = {10}
									btnProps = { { isLarge: true } }
								>
									{ __( 'Select Posts' ) }
								</PostSelectButton>
							</div>
							<div>
								{
									latestPosts ? latestPosts.map( ( post, index ) => {
										return (
											editLatestArticle( post, index, latestPosts, latestPostIds, setAttributes )
										);
									} ) : __( 'No Post Selected!' )
								}
							</div>
						</div>

						<div className="small-12 columns editors-pick medium-8">
							<div className="m-listing-header">
								<div className="row align-middle ">
									<div className="columns">
										<RichText
											tagName="span"
											placeholder={ __( 'Add title…' ) }
											value={ editorSectionTitle }
											className="m-listing-header__head editor-pick-title"
											onChange={ ( value ) => setAttributes( { editorSectionTitle: value } ) }
											formattingControls={ [] }
										/>
									</div>
									<div className="columns shrink">
										<a href="#" className="m-listing-header__link icon-right-open-mini" data-title={ editorSectionTitle }>{ __( 'More' ) }</a>
									</div>
								</div>

								<PostSelectButton
									value    = { editorPostIds }
									onSelect = { editorPosts => {
										setAttributes( { editorPosts } );
										setAttributes( { editorPostIds: editorPosts.map( p => p.id ) } )
									} }
									postType = "post"
									maxPosts = {14}
									btnProps = { { isLarge: true } }
								>
									{ __( 'Select Posts' ) }
								</PostSelectButton>

							</div>

							<div className="row">
								<div className="small-12 medium-6 columns">
									{
										editor_01[0] ? editEditorFirstPost( editor_01[0], 0 ) : __( 'No Post Selected!' )
									}
								</div>

								<div className="small-12 medium-6 columns">

									{
										editor_2_4 ? editor_2_4.map( ( post, index ) => {
											return (
												editEditorMiddlePost( post, index )
											);
										} )
										: __( 'No Post Selected!' )
									}

								</div>
							</div>

						</div>
					</div>
				</section>
			];
		},

		save: ( props ) => {
			const { attributes: { sectionTitle, editorSectionTitle, latestPosts, editorPosts } } = props;

			const editor_1    = editorPosts.slice( 0, 1 );
			const editor_2_4  = editorPosts.slice( 2, 4 );
			const editor_rest = editorPosts.slice( 5 );

			const editor_01 = editor_1.reduce( function ( result, item, index ) {
				result[index] = item;
				return result;
			}, {} );

			return (
				<section className={ classnames( 'm-listing', 'editor-with-latest-listing', props.className ) }>
					<div className="row">
						<div className="small-12 medium-4 columns">
							<div className="m-listing-header">
								<div className="row align-middle ">
									<div className="columns">
										<RichText.Content
											tagName="span"
											className={ classnames(
												'm-listing-header__head',
												'latest-news-title',
											) }
											value={ sectionTitle }
										/>
									</div>
								</div>
							</div>
							<div>
								{
									latestPosts.map( ( post, index ) => {
										return (
											latestArticle( post, index )
										);
									} )
								}
							</div>
						</div>

						<div className="small-12 columns editors-pick medium-8">
							<div className="m-listing-header">
								<div className="row align-middle ">
									<div className="columns">
										<RichText.Content
											tagName="span"
											className={ classnames(
												'm-listing-header__head',
												'editor-pick-title',
											) }
											value={ editorSectionTitle }
										/>
									</div>
									<div className="columns shrink">
										<a href="#" className="m-listing-header__link icon-right-open-mini" data-title="Editor's Picks">More</a>
									</div>
								</div>
							</div>

							<div className="row">
								<div className="small-12 medium-6 columns">
									{
										editorFirstPost( editor_01[0], 0 )
									}
								</div>

								<div className="small-12 medium-6 columns">

									{
										editor_2_4.map( ( post, index ) => {
											return (
												editorMiddlePost( post, index )
											);
										} )
									}

								</div>
							</div>

						</div>
					</div>
				</section>
			);
		},
	}
);
