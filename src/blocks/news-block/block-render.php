<?php
/**
 * News block render
 *
 * @since   0.1.0
 * @package News_Blocks
 */

/**
 * Register block type
 */
function news_news_block() {
	register_block_type(
		'news-blocks/news',
		[
			'editor_script' => 'news-blocks',
		]
	);
}

add_action( 'init', 'news_news_block' );
