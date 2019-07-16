<?php
/**
 * Section block render
 *
 * @since   0.1.0
 * @package News_Blocks
 */

/**
 * Register block type
 */
function news_section_block() {
	register_block_type(
		'news-blocks/section',
		[
			'editor_script' => 'news-blocks',
		]
	);
}

add_action( 'init', 'news_section_block' );
