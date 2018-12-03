import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class AddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            done: false,
            start: ''
        };
    }

    handleCancel = (e) => {
        e.preventDefault();
        this.props.offToggle();
        this.setState({
            name: '',
            done: false,
            start: ''
        });
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onAdd(this.state);
        this.props.offToggle();
        this.setState({
            name: '',
            done: false,
            start: ''
        });
    }

    render() {
        return (
            <div className="dialog" style={this.props.toggle.display ? {} : { display: "none" }}>
                <form onSubmit={this.handleSubmit}>
                    <h3>Add a task</h3>
                    <div className="input-group">
                        <label htmlFor="name-task">Task</label>
                        <input type="text" id="name-task" name="name" onChange={this.handleInputChange} value={this.state.name} required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="time-task">Time</label>
                        <input type="text" id="time-task" name="start" onChange={this.handleInputChange} value={this.state.start} required />
                    </div>
                    <div className="button-area">
                        <button className="add" type="submit">Add</button>
                        <button className="cancel" onClick={this.handleCancel}>Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        toggle: state.toggle
    };
};

const mapDispatchToprops = (dispatch) => {
    return {
        offToggle: () => {
            dispatch(actions.toggleOff());
        },
        onAdd: (task) => {
            dispatch(actions.addTask(task));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToprops)(AddForm);