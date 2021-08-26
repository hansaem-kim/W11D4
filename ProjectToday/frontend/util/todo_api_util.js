import { $CombineState } from 'redux';

export const fetchTodos = () => {
    debugger;
    return $.ajax({
        url: '/api/todos',
        method: "GET"
    });
}