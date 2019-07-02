<?php
/**
 * Top News block render
 *
 * @since   0.1.0
 * @package Gk_Blocks
 */

/**
 * Register block type
 */
function top_news_block() {
	register_block_type(
		'gk-blocks/top-news',
		[
			'editor_script' => 'gk-blocks',
		]
	);
}

add_action( 'init', 'top_news_block' );
