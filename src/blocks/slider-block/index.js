/**
 * Block: Slider Block
 *
 * Custom block to show slider block.
 *
 * @since   0.1.0
 * @package Gk_Blocks
 */

//import slider from './slider';

const { __ }                = wp.i18n;
const { registerBlockType } = wp.blocks;
const { PostSelectButton }  = hm.components;
const { decodeEntities }    = wp.htmlEntities;
const { InspectorControls } = wp.blockEditor;

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

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1
};

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
	'gk-blocks/slider',
	{
		title: __( 'Slider' ),
		icon: 'admin-post',
		category: 'common',
		keywords: [ __( 'Slider' ) ],

		supports: {
			align: [ 'wide' ],
		},

		styles: [
			{
				name: 'featured',
				label: __( 'Featured' ),
				isDefault: true
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
				<div class="slider-single-item">
					<div><h3>1</h3></div>
					<div><h3>2</h3></div>
					<div><h3>3</h3></div>
					<div><h3>4</h3></div>
					<div><h3>5</h3></div>
					<div><h3>6</h3></div>
				</div>
			];
		},

		save: ( props ) => {
			const { attributes: { posts, showMeta, showExcerpt } } = props;

			return (
				<div class="slider-single-item">
					<div><h3>1</h3></div>
					<div><h3>2</h3></div>
					<div><h3>3</h3></div>
					<div><h3>4</h3></div>
					<div><h3>5</h3></div>
					<div><h3>6</h3></div>
				</div>
			);
		},
	}
);
