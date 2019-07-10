<?php
/**
 * Section block render
 *
 * @since   0.1.0
 * @package Gk_Blocks
 */

/**
 * Register block type
 */
function gk_section_block() {
	register_block_type(
		'gk-blocks/section',
		[
			'editor_script' => 'gk-blocks',
		]
	);
}

add_action( 'init', 'gk_section_block' );
