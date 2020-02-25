import React from 'react';
import './style.css';

class TodoList extends React.Component {
    inputElement = React.createRef();
    render() {
        return (
            <div>
                <div>
                    <form onSubmit={this.props.addItem}>
                        <h2>Enter the task</h2>
                        <input placeholder="Type somthing"
                               ref = {this.props.inputElement}
                               value={this.props.currentItem.text}
                               onChange={this.props.handleInput}
                        />
                        <button className='but1' type="submit"> Add Task </button>
                    </form>
                </div>
                <h3>ToDo List: </h3>
            </div>
        )
    }
}

export default TodoList;