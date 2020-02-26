import React, {Component} from "react";
import * as PropTypes from "prop-types";

class AddTodo extends Component {

    render(){
        let input;
        return(
            <div>
                <form onSubmit={event => {
                    event.preventDefault();
                    if (!input.value.trim()) {
                        return
                    }
                    this.props.onAddTodo(input.value);
                    input.value = ''
                }}>
                </form>
            </div>
        )
    }
}

AddTodo.propTypes = {
    onAddTodo: PropTypes.func.isRequired
};

export default AddTodo;