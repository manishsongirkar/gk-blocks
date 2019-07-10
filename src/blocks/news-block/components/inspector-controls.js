/**
 * Inspector Controls.
 */

const { __ }                = wp.i18n;
const { InspectorControls } = wp.blockEditor;

const {
	ToggleControl,
	PanelBody,
	PanelRow,
	SelectControl,
	TextControl
} = wp.components;

function Inspector( { ...props } ) {
	const { setAttributes, attributes: { showMeta, showExcerpt, showMedia, showReadMore, readMoreText, layout, postType } } = props;
	const isPost = postType === 'post';

	// Post type options.
	const postTypeOptions = [
		{ value: 'post', label: __( 'Post' ) },
		{ value: 'page', label: __( 'Page' ) },
	];

	return (
		<InspectorControls key="inspector">
			<PanelBody title={ __( 'Post and Page Settings' ) }>
				<PanelRow>
					<SelectControl
						label={ __( 'Content Type' ) }
						options={ postTypeOptions }
						value={ postType }
						onChange={ ( value ) => setAttributes( { postType: value } ) }
					/>
				</PanelRow>

				<PanelRow>
					<SelectControl
						label={ __( 'Layout' ) }
						value={ layout || 'featured' }
						onChange={ value => setAttributes( { layout: ( 'featured' !== value ) ? value : undefined } ) }
						options={ [
							{ value: 'featured', label: __( 'Featured' ) },
							{ value: 'post-list', label: __( 'Post List' ) },
							{ value: 'thumb-type', label: __( 'Thumbnails' ) },
							{ value: 'bullet-list', label: __( 'Bullet List' ) },
						] }
					/>
				</PanelRow>

				{
					'bullet-list' !== layout && isPost &&
					<PanelRow>
						<ToggleControl
							label={ __( 'Display Media' ) }
							description={ __( 'Show the featured media or not.' ) }
							checked={ showMedia }
							onChange={ ( value ) => setAttributes( { showMedia: value } ) }
						/>
					</PanelRow>
				}

				{
					'bullet-list' !== layout && isPost &&
					<PanelRow>
						<ToggleControl
							label={ __( 'Display Meta' ) }
							description={ __( 'Show the post meta or not.' ) }
							checked={ showMeta }
							onChange={ ( value ) => setAttributes( { showMeta: value } ) }
						/>
					</PanelRow>
				}

				{
					'bullet-list' !== layout &&
					<PanelRow>
						<ToggleControl
							label={__( 'Display Excerpt' )}
							description={__( 'Show the post excerpt or not.' )}
							checked={showExcerpt}
							onChange={( value ) => setAttributes( { showExcerpt : value } )}
						/>
					</PanelRow>
				}

				{
					'bullet-list' !== layout &&
					<PanelRow>
						<ToggleControl
							label={__( 'Display Read More' )}
							description={__( 'Show the read more link or not.' )}
							checked={showReadMore}
							onChange={( value ) => setAttributes( { showReadMore : value } )}
						/>
					</PanelRow>
				}

				{
					'bullet-list' !== layout && showReadMore &&
					<PanelRow>
						<TextControl
							label={ __( 'Customize Read More Text' ) }
							type="text"
							value={ readMoreText }
							onChange={( value ) => setAttributes( { readMoreText : value } )}
						/>
					</PanelRow>
				}

			</PanelBody>
		</InspectorControls>
	);
}

export default Inspector;
