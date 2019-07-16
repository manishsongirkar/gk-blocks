/**
 * Block: Section Block
 *
 * Custom block for Section wrapper.
 *
 * @since   0.1.0
 * @package News_Blocks
 */

import classnames from "classnames";

const { __ }                = wp.i18n;
const { registerBlockType } = wp.blocks;

const {
	RichText,
	URLInputButton,
	InnerBlocks,
	InspectorControls,
} = wp.blockEditor;

const {
	PanelBody,
	PanelRow,
	SelectControl,
} = wp.components;

const ALLOWED_BLOCKS = [ 'news-blocks/news' ];

registerBlockType(
	'news-blocks/section',
	{
		title: __( 'Section' ),
		icon: 'editor-table',
		category: 'common',
		keywords: [ __( 'Section' ) ],

		supports: {
			align: ['wide'],
		},

		attributes: {
			align: {
				type: 'string',
				default: 'wide',
			},

			sectionType: {
				type: 'string',
				default: 'bl-post-list',
			},

			sectionTitle: {
				type: 'html',
				selector: '.title',
			},

			url: {
				type: 'string',
			},

			text: {
				type: 'string',
				default: __( 'View More' ),
			},
		},

		edit: ( props ) => {

			const {
				attributes: {
					url,
					text,
					sectionTitle,
					sectionType,
				},
				setAttributes,
			} = props;

			const wrapperClasses = classnames(
				'm-listing',
				'blocks-section',
				{
					'block-slider': sectionType === 'bl-slider',
					'block-post-list': sectionType === 'bl-post-list',
				},
				props.className
			);

			const sectionTypes = [
				{ value: 'bl-post-list', label: __( 'Post List' ) },
				{ value: 'bl-slider', label: __( 'Slider' ) },
			];

			return [
				<InspectorControls key="inspector">
					<PanelBody title={ __( 'Section Settings' ) }>
						<PanelRow>
							<SelectControl
								label={ __( 'Content Type' ) }
								options={ sectionTypes }
								value={ sectionType }
								onChange={ ( value ) => setAttributes( { sectionType: value } ) }
							/>
						</PanelRow>
					</PanelBody>
				</InspectorControls>,

				<section key="edit" className={ wrapperClasses }>
					<div className="row align-justify">
						<div className="column shrink">
							<RichText
								tagName="h3"
								placeholder={ __( 'Add title…' ) }
								value={ sectionTitle }
								className="title"
								onChange={ ( value ) => setAttributes( { sectionTitle: value } ) }
								formattingControls={ [] }
							/>
						</div>
						<div className="column shrink view-more-wrap">
							<RichText
								className="view-more"
								value={ text }
								formattingControls={ [] }
								placeholder={ __( 'Add View More Text' ) }
								onChange={ ( value ) => setAttributes( { text: value } ) }
							/>

							<URLInputButton
								url={ url }
								onChange={ ( value ) => setAttributes( { url: value } ) }
							/>
						</div>
					</div>

					<div className="blocks-section-inner">
						<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
					</div>
				</section>
			]
		},

		save: ( props ) => {
			const {
				attributes: {
					url,
					text,
					sectionTitle,
					sectionType,
				},
			} = props;

			const wrapperClasses = classnames(
				'm-listing',
				'blocks-section',
				{
					'block-slider': sectionType === 'bl-slider',
					'block-post-list': sectionType === 'bl-post-list',
				},
				props.className
			);

			return(
				<section key="save" className={ wrapperClasses }>
					<div className="row align-justify">
						<div className="column shrink">
							<RichText.Content
								tagName="h3"
								className="title"
								value={ sectionTitle }
							/>
						</div>
						{
							url &&
							<div className="column shrink view-more-wrap">
								<a href={ url }>{ text }</a>
							</div>
						}
					</div>

					<div className="blocks-section-inner">
						<InnerBlocks.Content />
					</div>
				</section>
			)
		}
	}
);
