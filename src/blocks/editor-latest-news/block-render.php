<?php
/**
 * Editor's picks and Latest news block render
 *
 * @since   0.1.0
 * @package Gk_Blocks
 */

/**
 * Register block type
 */
function top_editor_latest_news() {
	register_block_type(
		'gk-blocks/editor-latest-news',
		[
			'editor_script' => 'gk-blocks',
		]
	);
}

add_action( 'init', 'top_editor_latest_news' );
