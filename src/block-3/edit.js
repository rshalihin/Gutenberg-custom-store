import { __ } from '@wordpress/i18n';
import { TextControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useEntityProp } from '@wordpress/core-data';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	const postType = useSelect((select) => {
		return select('core/editor').getCurrentPostType();
	}, []);
	const [meta, setMeta] = useEntityProp('postType', postType, 'meta');
	const subTitleValue =  meta._demo_block_meta_box_gutenberg_blocks;
	console.log(meta);
	return (
		<div { ...useBlockProps() }>
			{ subTitleValue || subTitleValue === '' ?
			<TextControl
                label={ __( 'Sub Title' ) }
				value={subTitleValue}
				onChange={(v) => setMeta({...meta, _demo_block_meta_box_gutenberg_blocks: v}) }
            />
			: __( 'Metabox is not registered or save' , 'todo-list')
			}
		</div>
	);
}
