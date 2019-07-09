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
function gk_slider_block() {
	register_block_type(
		'gk-blocks/slider',
		[
			'editor_script' => 'gk-blocks',
		]
	);
}

add_action( 'init', 'gk_slider_block' );
