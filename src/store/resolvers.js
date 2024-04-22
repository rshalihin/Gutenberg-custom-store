import { dispatch } from "@wordpress/data";
import { fetchTodos } from "./controls";
import { populatedTodos } from "./actions";

export function* getTodos() {
    try {
        const todos = yield fetchTodos();
        return populatedTodos(todos);
    } catch (error) {
        return dispatch('core/notices').createErrorNotice(error.message || 'Data could not be fetched');
    }
}