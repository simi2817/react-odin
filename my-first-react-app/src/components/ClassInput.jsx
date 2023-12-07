import { Component } from "react";
import Count from "./Count";

class ClassInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [],
            input: '',
            edit: false,
            value: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.editItem = this.editItem.bind(this);
    }

    handleInputChange(e) {
        this.setState((state) => ({
            ...state,
            input: e.target.value,
        }));
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState((state) => ({
            todos: state.todos.concat(state.input),
            input: '',
        }));
    }

    deleteItem(e) {
        const list = this.state.todos.filter(l => l !== e.target.value);
        this.setState(() => ({
            todos: list
        }))
    }

    handleEdit(e) {
        this.setState(() => ({
            edit: true,
            value: e.target.value,
        }))
    }

    editItem(e) {
        e.preventDefault();
        const list = [...this.state.todos];
        const updatedList = list.map((l) => {
            if(l === this.state.value)
                return l = this.state.input;
            return l;
        });
        this.setState(() => ({
            todos: updatedList,
            input: '',
            edit: false,
            value: ''
        }));
    }

    render() {
        return (
            <section>
                <h3>{this.props.name}</h3>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="task-entry">Input task - </label>
                    <input type="text" name="task-entry" value={this.state.input} onChange={this.handleInputChange}/>
                    <button type="submit">Submit</button>
                </form>
                <h4>Tasks -</h4>
                <Count todos={this.state.todos}/>
                <ul>
                    {this.state.todos.map((todo) => (
                        <li key={todo}>
                            {todo}<button onClick={this.deleteItem}>remove</button><button value={todo} onClick={this.handleEdit}>edit</button>
                    </li>
                    ))}
                    {
                        this.state.edit ?
                        <form onSubmit={this.editItem}>
                        <input type="text" value={this.state.input} onChange={this.handleInputChange}/><button type="submit" >Resubmit</button>
                        </form> : null
                    }
                </ul>
            </section>
        )
    }
}

export default ClassInput;