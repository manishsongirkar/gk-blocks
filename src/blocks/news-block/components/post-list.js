/**
 * Post List Markup.
 */

const { __ }             = wp.i18n;
const { Button }         = wp.components;
const { decodeEntities } = wp.htmlEntities;
const { Fragment }       = wp.element;

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

function PostList( { post, isEdit, props } ) {
	const {
		attributes: {
			postType,
			postIds,
			posts,
			showMeta,
			showExcerpt,
			showMedia,
			showReadMore,
			readMoreText,
		},
		setAttributes
	} = props;

	const isPost = postType === 'post';

	return (
		<Fragment>
			<div className="row">

				{
					showMedia && post.media ? <div className="small-12 columns news-thumbnail position-relative">
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

					{ isPost && showReadMore ? <div className="m-article-featured__readmore">
						<a href={ post.link } title={ post.title.rendered } rel="bookmark">{ readMoreText }</a>
					</div> : null }

				</div>
			</div>

			{
				isEdit ?
					<Button
						onClick={() => {
							setAttributes( { posts : [...posts.filter( item => item.id !== post.id )] } );
							setAttributes( { postIds : [...postIds.filter( item => item !== post.id )] } )
						}}
					>
						{__( 'Remove' )}
					</Button> : null
			}
		</Fragment>
	)
}

export default PostList;
