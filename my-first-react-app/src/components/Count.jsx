import { Component } from "react";

class Count extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <p>Count: {this.props.todos.length}</p>
    }
}

export default Count;