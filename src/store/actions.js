import { ADD_TODO, POPULATED_TODOS, UPDATED_TODO } from "./type";
import { createTodo, toggleTodo as toggleTodoControl } from "./controls";

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

export function* toggleTodo(todo, index) {
    try{
        yield updateTodo({...todo, loading: true}, index);
        const updatedTodo = yield toggleTodoControl(todo);
        return updateTodo(updatedTodo, index);
    } catch(error) {
        return dispatch('core/notices').createErrorNotice(error.message || 'Data could not updated');
    }
}

export const updateTodo = (todo, index) => {
    return {
        type: UPDATED_TODO,
        todo,
        index
    }
}

export const populatedTodos = (todos) => {
    return {
        type: POPULATED_TODOS,
        todos,
    }
}