<?php
/**
 * Top News block render
 *
 * @since   0.1.0
 * @package News_Blocks
 */

/**
 * Register block type
 */
function top_news_block() {
	register_block_type(
		'news-blocks/top-news',
		[
			'editor_script' => 'news-blocks',
		]
	);
}

add_action( 'init', 'top_news_block' );
