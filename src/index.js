import React from 'react';
import * as ReactDOM from 'react-dom';
import TodoList from './TodoList';
import TodoItems from './TodoItems';


class App extends React.Component {
    constructor(){
        super();
        this.state = {
            items: [],
            currentItem: {text:'', id:''}
        }
    }

    handleInput = (event) =>{
        const itemText = event.target.value;
        const currentItem = {text: itemText, id: Math.random() * 100};
        this.setState({
            currentItem,
        })
    };

    addItem = (event) =>{
        event.preventDefault();
        const newItem = this.state.currentItem;
        if(newItem.text !== ''){
            const items = [...this.state.items, newItem];
            this.setState({
                items: items,
                currentItem: {text:'', id: ''},
            })
        } else {
            alert('Empty input')
        }
    };

    checkItem = (id) => {
        const findItems = this.state.items.filter((item)=>{
            if(item.id === id){
                item.checked = !item.checked;
                console.log(item.id, item.checked)
            }
            return item;
        });
        this.setState({
            items: findItems,
        })
    };

    deleteItem = (id) =>{
        const filteredItems = this.state.items.filter((item)=>{
            return item.id !== id
        });
        this.setState({
            items: filteredItems,
        })
    };

    render() {
        return (
            <div className="App">
                <TodoList addItem = {this.addItem}
                          inputElement = {this.inputElement}
                          handleInput = {this.handleInput}
                          currentItem = {this.state.currentItem} />
                <TodoItems entries = {this.state.items}
                           checkItem = {this.checkItem}
                           deleteItem = {this.deleteItem}/>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);