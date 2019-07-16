<?php
/**
 * Editor's picks and Latest news block render
 *
 * @since   0.1.0
 * @package News_Blocks
 */

/**
 * Register block type
 */
function top_editor_latest_news() {
	register_block_type(
		'news-blocks/editor-latest-news',
		[
			'editor_script' => 'news-blocks',
		]
	);
}

add_action( 'init', 'top_editor_latest_news' );
