import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useSelect, useDispatch } from '@wordpress/data';
import { useState } from "@wordpress/element";
import { CheckboxControl, TextControl, Button } from "@wordpress/components";
import './editor.scss';

export default function Edit() {
	const [newTodo, setNewTodo] = useState('');
	const [addingTodo, setAddingTodo] = useState(false);


	const todos = useSelect((select) => {
		const todosStore = select('todo-store/store');
		return todosStore && todosStore.getTodos();
	}, []);
	const actions = useDispatch('todo-store/store');
	const addTodo = actions && actions.addTodo;
	const toggleTodo = actions && actions.toggleTodo;
	return (
		<div  { ...useBlockProps() }>
			{ !todos && <p>
			{ __( 'Todo List – hello from the editor!', 'todo-list' ) }
			</p>}
			<ul>
				{ todos && todos.map( (todo, index) => {
					return(
						<li key={todo.id} className={todo.completed ? 'todo-completed' : ''}>
							<CheckboxControl
								disabled={todo.loading}
								label={todo.title}
								checked={todo.completed}
								onChange={() =>{
									if ( toggleTodo ) {
										toggleTodo(todo, index);
									}}}
								/>
						</li>
					)
				})}
			</ul>
			<form onSubmit={ async (e) =>{				
				e.preventDefault()				
				if (addTodo && newTodo) {
					setAddingTodo(true);
					await addTodo(newTodo)
					setNewTodo('');
					setAddingTodo(false);
				}
			}}
			className='addTodo-form'>
				<TextControl
                    value={newTodo}
                    onChange={(value) => setNewTodo(value)}
                />
                <Button disabled={addingTodo} variant={'primary'} type='submit'>{ __( 'Add Todo', 'todo-list' ) }</Button>
			</form>
		</div>
	);
}
