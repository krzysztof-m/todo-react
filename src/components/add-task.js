import React, { Component } from 'react';

class AddTask extends Component {
    constructor(props) {
        super(props);

        this.state = {
            task: ''
        }
        this.onFormSubmit = this.onFormSubmit.bind(this);
        //this.submitBtn = document.querySelector('add-task__btn');
    }
    
    onFormSubmit(e) {
        //TODO: I think that button animation could be done better
        const submitBtn = document.querySelector('.add-task__btn');
        e.preventDefault();
        submitBtn.classList.add('add-task__btn--active');
        console.log(submitBtn);
        this.props.addTask(this.state.task);
        this.setState({task: ''});
        setTimeout(() => {
            submitBtn.classList.remove('add-task__btn--active');
        }, 300);
    }

    render() {
        return (
            <form className="add-task" onSubmit={this.onFormSubmit}>
                <input
                className="add-task__input"
                type="text"
                value={this.state.task}
                onChange={(e) => {this.setState({task: e.target.value})}}
                />
                <button className="add-task__btn" type="submit"><span>+</span></button>
            </form>
        );
    }
}
export default AddTask;