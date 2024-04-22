import { ADD_TODO, POPULATED_TODOS, TOGGLE_TODO } from "./type";
import { createTodo, toggleTodo as toggleTodoAction } from "./controls";

export function* addTodo(title) {
    try{
    const todo = yield createTodo(title);
    return {
        type: ADD_TODO,
        todo,
    };
    } catch(error) {
        return dispatch('core/notices').createErrorNotice(error.message || 'Data could not be created');
    }
};

export function* toggleTodo(todo) {
    try{
        const updatedTodo = yield toggleTodoAction(todo);
        console.log(updatedTodo);
    } catch(error) {
        return dispatch('core/notices').createErrorNotice(error.message || 'Data could not be updated');
    }
}

export const populatedTodos = (todos) => {
    return {
        type: POPULATED_TODOS,
        todos,
    }
}