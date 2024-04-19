<?php
/**
 * Plugin Name:       Todo Store
 * Description:       WordPress Custom Data Store
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Md. Readush Shalihin.
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       todo-store
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

function create_block_todo_store_block_init() {
	$asset_file = include plugin_dir_path( __FILE__ ) . 'build/index.asset.php';
	wp_enqueue_script( 'block-todo-plugin-script', plugins_url( 'build/index.js', __FILE__ ), $asset_file['dependencies'], $asset_file['version'] );
}
add_action( 'enqueue_block_editor_assets', 'create_block_todo_store_block_init' );
