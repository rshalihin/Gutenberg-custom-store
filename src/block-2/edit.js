import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useSelect } from "@wordpress/data";
import './editor.scss';

export default function Edit() {
	const data = useSelect( (select) => {
		const store =  select('todo-store/store');
		if( !store ) return null;
		return {
			total: store.getTodosNumbers(),
			done: store.getDoneTodosNumbers(),
			undone: store.getUndoneTodosNumbers(),
		}
	});
	return (
		<div { ...useBlockProps() }>
			{ !data &&
			<p>{ __( 'Please check Todo Store Plugin is activated', 'block-2' ) }</p>
			}
			{ data && 
			<ul>
				<li>
					{ __( 'Total', 'block-2') } { data.total }
				</li>
				<li>
					{ __( 'Done', 'block-2') } { data.done }
				</li>
				<li>
					{ __( 'Undone', 'block-2') } { data.undone }
				</li>				
			</ul>
			}
		</div>
	);
}
