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

import edit from './edit';
import save from './save';

const allAttributes = {
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

	layout: {
		type: 'string',
		default: 'featured',
	},

	showMeta: {
		type: 'boolean',
		default: false,
	},

	showExcerpt: {
		type: 'boolean',
		default: false,
	},

	showMedia: {
		type: 'boolean',
		default: false,
	},

	showReadMore: {
		type: 'boolean',
		default: false,
	},

	readMoreText: {
		type: 'text',
		default: __( 'Read More' )
	},
};

registerBlockType(
	'gk-blocks/news',
	{
		title:    __( 'News' ),
		icon:     'admin-post',
		category: 'common',
		keywords: [ __( 'News' ) ],

		supports: {
			align: [ 'wide' ],
		},

		attributes: allAttributes,

		edit,

		save,
	}
);
