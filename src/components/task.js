import React, { Component } from "react";
import * as PropTypes from "prop-types";


export default class TodoItem extends Component {
    constructor(props) {
        super(props);

        this.showRedactor = this.showRedactor.bind(this);
        this.hideRedactor = this.hideRedactor.bind(this);
        this.hideRedactorWithKey = this.hideRedactorWithKey.bind(this);
    }

    showRedactor() {
        this.textarea.style.display = "block";
        this.textarea.focus();
    }

    hideRedactor() {
        this.textarea.style.display = "none";

        const { value, onTodoDelete } = this.props;
        if(!value) {
            onTodoDelete();
        }
    }

    hideRedactorWithKey(event) {
        if(event.keyCode === 27 || event.keyCode === 13) {
            this.hideRedactor();
        }
    }

    render() {
        const {
            onToggleCompleteTodo,
            completed,
            onTodoDelete,
            onTodoEdit,
            value,
            id,
        } = this.props;
        return (
            <li
                className={completed ? "completed" : null}
                onDoubleClick={this.showRedactor}
            >
                <button
                    onClick={() => onToggleCompleteTodo(id)}
                    className={`completeBut${completed ? " checked" : ""}`}
                >✓
                </button>
                {value}
                <button onClick={() => onTodoDelete(id)} className="deleteBut">
                    ✗
                </button>
                <textarea
                    className="textRedactor"
                    value={value}
                    onChange={event => onTodoEdit({ id, value: event.target.value })}
                    onBlur={this.hideRedactor}
                    onKeyDown={this.hideRedactorWithKey}
                    ref={textarea => {
                        this.textarea = textarea;
                    }}
                />
            </li>
        );
    }
}

TodoItem.propTypes = {
    onToggleCompleteTodo: PropTypes.func.isRequired,
    onTodoDelete: PropTypes.func.isRequired,
    onTodoEdit: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    value: PropTypes.string,
    completed: PropTypes.bool,
};

TodoItem.defaultProps = {
    value: "",
    completed: false,
};