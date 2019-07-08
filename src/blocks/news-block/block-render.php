<?php
/**
 * News block render
 *
 * @since   0.1.0
 * @package Gk_Blocks
 */

/**
 * Register block type
 */
function gk_news_block() {
	register_block_type(
		'gk-blocks/news',
		[
			'editor_script' => 'gk-blocks',
		]
	);
}

add_action( 'init', 'gk_news_block' );
