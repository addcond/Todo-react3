import React from "react";
import * as PropTypes from "prop-types";
import Task from "./task";

const TasksList = ({ list, filter, onTodoEdit, onTodoDelete, onToggleCompleteTodo, }) => (
    <section>
        <ul>
            {list
                .filter(item => {
                    if(filter === "active") {
                        return !item.completed;
                    } else if(filter === "completed") {
                        return item.completed;
                    }
                    return true;
                })
                .map(item => (
                    <Task
                        {...item}
                        key={item.id}
                        onTodoEdit={onTodoEdit}
                        onTodoDelete={onTodoDelete}
                        onToggleCompleteTodo={onToggleCompleteTodo}
                    />
                ))}
        </ul>
    </section>
);

TasksList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object),
    filter: PropTypes.string,
    onTodoEdit: PropTypes.func.isRequired,
    onTodoDelete: PropTypes.func.isRequired,
    onToggleCompleteTodo: PropTypes.func.isRequired,
};

TasksList.defaultProps = {
    list: [],
    filter: "all",
};

export default TasksList;