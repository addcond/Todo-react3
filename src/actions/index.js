export const CreateTodo = " CreateTodo";
export const EditTodo = "EditTodo";
export const DeleteTodo = "DeleteTodo";
export const CompleteTodo = "CompleteTodo";
export const CompleteAllTodo = "CompleteAllTodo";
export const DeleteAllCompleted = "DeleteAllCompleted";
export const FilterChange = "FilterChange";


export const createTodoAction = todo => ({
    type:  CreateTodo,
    payload: todo,
});


export const editTodoAction = data => ({
    type: EditTodo,
    payload: data,
});


export const deleteTodoAction = id => ({
    type: DeleteTodo,
    payload: { id },
});


export const changeFilterAction = filter => ({
    type: FilterChange,
    payload: { filter },
});


export const toggleCompleteTodoAction = id => ({
    type: CompleteTodo,
    payload: { id },
});


export const toggleAllCompleteAction = value => ({
    type: CompleteAllTodo,
    payload: { value },
});


export const deleteAllCompletedAction = () => ({
    type: DeleteAllCompleted,
});