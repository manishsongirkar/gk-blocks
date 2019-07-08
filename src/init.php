<?php
/**
 * GK Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   0.1.0
 * @package Gk_Blocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Register Gutenberg block on server-side.
 *
 * Register the block on server-side to ensure that the block
 * scripts and styles for both frontend and backend are
 * enqueued when the editor loads.
 *
 * @link  https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type#enqueuing-block-scripts
 * @since 0.1.0
 */
function gk_blocks_top_news() {
	wp_register_script(
		'gk-blocks',
		plugins_url( 'build/index.js', dirname( __FILE__ ) ),
		[ 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-polyfill', 'hm-gb-tools-editor' ],
		'0.1.0',
		true
	);
}

add_action( 'init', 'gk_blocks_top_news' );

require_once plugin_dir_path( __FILE__ ) . 'blocks/news-block/block-render.php';
//require_once plugin_dir_path( __FILE__ ) . 'blocks/top-news/block-render.php';
//require_once plugin_dir_path( __FILE__ ) . 'blocks/editor-latest-news/block-render.php';

/**
 * Enqueue block scripts and styles in both the admin editor and frontend.
 */
function gk_blocks_enqueue_block_assets() {
	wp_register_style(
		'gk-blocks-frontend-style',
		plugins_url( 'build/style.css', dirname( __FILE__ ) ),
		[],
		'0.1.0'
	);

	wp_enqueue_style( 'gk-blocks-frontend-style' );
}

add_action( 'enqueue_block_assets', 'gk_blocks_enqueue_block_assets' );

/**
 * Enqueue block scripts and styles in the admin editor.
 */
function gk_blocks_enqueue_block_editor_assets() {
	wp_register_style(
		'gk-blocks-editor-style',
		plugins_url( 'build/editor.css', dirname( __FILE__ ) ),
		[ 'wp-edit-blocks' ],
		'0.1.0'
	);

	wp_enqueue_style( 'gk-blocks-editor-style' );
}

add_action( 'enqueue_block_editor_assets', 'gk_blocks_enqueue_block_editor_assets' );
