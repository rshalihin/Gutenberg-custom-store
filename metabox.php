<?php

/**
 * Undocumented function
 *
 * @return void
 */
function adding_metabox_data_for_gutenberg_blocks() {
	register_meta(
		'post',
		'_demo_block_meta_box_gutenberg_blocks',
		array(
			'single'            => true,
			'type'              => 'string',
			'sanitize_callback' => 'sanitize_text_field',
			'show_in_rest'      => true,
			'auth_callback'     => function() {
				return current_user_can( 'edit_posts' );
			},
		)
	);
}
add_action( 'init', 'adding_metabox_data_for_gutenberg_blocks' );

/**
 * Registering Custom Metabox.
 *
 * @return void
 */
function blocks_course_add_meta_box() {
	add_meta_box(
		'blocks_course_post_options_metabox',
		'Post Options',
		'blocks_course_post_options_metabox_html',
		'post',
		'normal',
		'default',
		array(
			'__back_compat_meta_box'                => true,
			'_demo_block_meta_box_gutenberg_blocks' => true,
		)
	);
}

add_action( 'add_meta_boxes', 'blocks_course_add_meta_box' );

/**
 * Custom metabox html render.
 *
 * @param [object] $post The post.
 * @return void
 **/
function blocks_course_post_options_metabox_html( $post ) {
	$subtitle = get_post_meta( $post->ID, '_demo_block_meta_box_gutenberg_blocks', true );
	wp_nonce_field( 'blocks_course_update_post_metabox', 'blocks_course_update_post_nonce' );
	?>
	<p>
		<label for="blocks_course_post_subtitle_field"><?php esc_html_e( 'Post Subtitle', 'blocks_course' ); ?></label>
		<br />
		<input class="widefat" type="text" name="blocks_course_post_subtitle_field" id="blocks_course_post_subtitle_field" value="<?php echo esc_attr( $subtitle ); ?>" />
	</p>
	<?php
}

/**
 * Save Custom metabox value.
 *
 * @param [object] $post_id the post.
 * @param [int]    $post post id.
 * @return void
 */
function blocks_course_save_post_metabox( $post_id, $post ) {
	$edit_cap = get_post_type_object( $post->post_type )->cap->edit_post;
	if ( ! current_user_can( $edit_cap, $post_id ) ) {
		return;
	}
	if ( ! isset( $_POST['blocks_course_update_post_nonce'] ) || ! wp_verify_nonce( wp_unslash( $_POST['blocks_course_update_post_nonce'] ), 'blocks_course_update_post_metabox' ) ) {
		return;
	}

	if ( array_key_exists( 'blocks_course_post_subtitle_field', $_POST ) ) {
		update_post_meta(
			$post_id,
			'_demo_block_meta_box_gutenberg_blocks',
			sanitize_text_field( wp_unslash( $_POST['blocks_course_post_subtitle_field'] ) )
		);
	}

}

add_action( 'save_post', 'blocks_course_save_post_metabox', 10, 2 );
