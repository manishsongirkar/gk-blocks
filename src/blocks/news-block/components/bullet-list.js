/**
 * Bullet List Markup.
 */

const { __ }             = wp.i18n;
const { Button }         = wp.components;
const { decodeEntities } = wp.htmlEntities;

function BulletList( { post, isEdit, props } ) {
	const {
		attributes: {
			postIds,
			posts,
		},
		setAttributes
	} = props;

	return (
		<li className="news-details position-relative">
			<a href={ post.link } title={ post.title.rendered } rel="bookmark">{ decodeEntities( post.title.rendered ) }</a>
			{
				isEdit ?
					<Button
						onClick = {
							() => {
								setAttributes( { posts: [ ...posts.filter( item => item.id !== post.id ) ] } );
								setAttributes( { postIds: [ ...postIds.filter( item => item !== post.id ) ] } )
							}
						}
					>
						{ __( 'Remove' ) }
					</Button> : null
			}
		</li>
	)
}

export default BulletList;
