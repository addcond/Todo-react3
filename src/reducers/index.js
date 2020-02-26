import { CreateTodo, EditTodo, DeleteTodo, CompleteTodo, CompleteAllTodo, DeleteAllCompleted, FilterChange } from "../actions";

export const initialState = JSON.parse(localStorage.getItem("todoha")) || {
    list: [],
    filter: "all",
};

const todoReducer = (state = initialState, action) => {
    const { list } = state;
    const { payload } = action;
    const { type } = action;

    switch (type) {
        case CreateTodo:
            return { ...state, list: list.concat(payload) };

        case EditTodo:
            return {
                ...state,
                list: list.map(todo => {
                    const { id, value } = payload;
                    if (todo.id === id) {
                        todo.value = value;
                    }
                    return todo;
                }),
            };

        case DeleteTodo:
            return {
                ...state,
                list: list.filter(({ id }) => id !== payload.id),
            };

        case CompleteTodo:
            return {
                ...state,
                list: list.map(todo => {
                    if (todo.id === payload.id) {
                        todo.completed = !todo.completed;
                    }
                    return todo;
                }),
            };

        case CompleteAllTodo:
            return {
                ...state,
                list: list.map(todo => {
                    todo.completed = payload.value;
                    return todo;
                }),
            };

        case DeleteAllCompleted:
            return {
                ...state,
                list: list.filter(todo => !todo.completed),
            };

        case FilterChange:
            return { ...state, filter: payload.filter };

        default:
            return state;
    }
};

export default todoReducer;