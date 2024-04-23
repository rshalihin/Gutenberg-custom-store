<?php

function demo_block_add_meta_box_templates() {
	$post_type_object           = get_post_type_object( 'post' );
	$post_type_object->template = array(
		array( 'create-block/metadata-block' ),
	);
}
add_action( 'init', 'demo_block_add_meta_box_templates' );
