/**
 * Block: Latest Posts Block
 *
 * Custom block to show default latest news block.
 *
 * @since   0.1.0
 * @package Gk_Blocks
 */

const { __ }                = wp.i18n;
const { registerBlockType } = wp.blocks;
const { withSelect }        = wp.data;

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

registerBlockType(
	'gk-blocks/latest-posts',
	{
		title:    __( 'Latest Posts' ),
		icon:     'megaphone',
		category: 'common',
		keywords: [ __( 'Latest Posts' ) ],

		edit: withSelect(
			( select, props ) => {
				const { attributes: { postsToShow } } = props;
				const { getEntityRecords }            = select( 'core' );

				return {
					posts: getEntityRecords(
						'postType',
						'post',
						{
							per_page: postsToShow
						}
					)
				};
			}
		)(
			( { posts, className } ) => {

				if ( ! posts ) {
					return __( 'Loading...' );
				}

				if ( posts && 0 === posts.length ) {
					return __( 'No Posts Found!!!' );
				}

				return [
					<div className={ classnames( 'gk-latest-posts', className ) }>
						{
							posts ? posts.map( ( post ) => {
								return [
									<div className="row">
										<div className="small-12 medium-4 column">
											<a
												href={ post.link }
												title={ post.title.row }
											>
												<img src={ post.featured_image_src } alt={ post.title.row } />
											</a>
										</div>
										<div className="small-12 medium-8 column">
											<h2>
												<a
													href={ post.link }
													title={ post.title.row }
												>
													{ post.title.rendered }
												</a>
											</h2>
											<div className="meta">
												By <a href={ post.author_info.author_link }>{ post.author_info.display_name }</a> on { dateFormat( post.date ) }
											</div>
										</div>
									</div>
								];
							} ) : __( 'No Post found!' )
						}
					</div>
				]
			}
		),

		save: () => {
			return null;
		}
	}
);
