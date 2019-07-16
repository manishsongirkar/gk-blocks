<?php
/**
 * Plugin Name:     News Blocks
 * Plugin URI:      https://github.com/manishsongirkar/news-blocks
 * Description:     Custom Gutenberg Blocks for news site.
 * Author:          manishsongirkar
 * Author URI:      https://github.com/manishsongirkar
 * Text Domain:     news-blocks
 * Domain Path:     /languages
 * Version:         0.1.0
 * License:         GPL2+
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package         News_Blocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * HM Gutenberg Tools Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'lib/hm-gutenberg-tools/plugin.php';

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
