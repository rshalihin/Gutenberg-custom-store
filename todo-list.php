<?php
/**
 * Plugin Name:       Todo List Block
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Md. Readush Shalihin
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       todo-list
 *
 * @package           create-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function todo_list_todo_list_block_init() {
	register_block_type( __DIR__ . '/build/block-1' );
	register_block_type( __DIR__ . '/build/block-2' );
	register_block_type( __DIR__ . '/build/block-3' );
}
add_action( 'init', 'todo_list_todo_list_block_init' );

function demo_block_todo_list_block_translations() {
	wp_set_script_translations( 'create-block-todo-list-editor-script', 'todo-list', plugin_dir_path( __FILE__ ) . 'languages' );
}
add_action( 'init', 'demo_block_todo_list_block_translations' );


function mrs_demo_block_todo_list_load_textdomain( $mofile, $domain ) {
	if ( 'todo-list' === $domain && false !== strpos( $mofile, WP_LANG_DIR . '/plugins/' ) ) {
		$locale = apply_filters( 'plugin_locale', determine_locale(), $domain );
		$mofile = WP_PLUGIN_DIR . '/' . dirname( plugin_basename( __FILE__ ) ) . '/languages/' . $domain . '-' . $locale . '.mo';
	}
	return $mofile;
}
add_filter( 'load_textdomain_mofile', 'mrs_demo_block_todo_list_load_textdomain', 10, 2 );
