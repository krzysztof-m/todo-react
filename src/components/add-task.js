import React, { Component } from 'react';

class AddTask extends Component {
    constructor(props) {
        super(props);

        this.state = {
            task: ''
        }
        this.onFormSubmit = this.onFormSubmit.bind(this);
        //console.log(this.props.addTask);
    }
    
    onFormSubmit(e) {
        e.preventDefault();
        this.props.addTask(this.state.task);
        this.setState({task: ''});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input
                type="text"
                value={this.state.task}
                onChange={(e) => {this.setState({task: e.target.value})}}
                />
                <button type="submit">Add</button>
            </form>
        );
    }
}
export default AddTask;