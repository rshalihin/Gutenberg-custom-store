import { registerPlugin } from "@wordpress/plugins";
import { PluginSidebar } from "@wordpress/edit-post";
import { useSelect, useDispatch } from "@wordpress/data";
import { PanelBody, TextControl } from "@wordpress/components"
import { __ } from "@wordpress/i18n";

const MetaFieldInput = () => {
    const subtitleValue = useSelect( (select) => {
        return select('core/editor').getEditedPostAttribute('meta')._demo_block_meta_box_gutenberg_blocks; }, []);
    const { editPost } = useDispatch('core/editor');
    const onChangePostSubtitle = (newValue) => {
        editPost({meta: {_demo_block_meta_box_gutenberg_blocks: newValue}});
    }
    return (
        <PanelBody title={__('Post Options', 'demo-block-meta-plugin')}>
            <TextControl
                label={__('Post Options', 'demo-block-meta-plugin')}
                value={subtitleValue}
                onChange={onChangePostSubtitle}
            />
        </PanelBody>
    );
}

registerPlugin('demo-block-meta-plugin', {
    render: () => {        
        return (
            <PluginSidebar
                name="meta-field-sidebar"
                title={__('Post Options', 'demo-block-meta-plugin')}
                icon={"admin-settings"}
            >
                <MetaFieldInput />
            </PluginSidebar>
        );
    }
})