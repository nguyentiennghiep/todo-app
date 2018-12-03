import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            done: this.props.task.done,
        };
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
        this.props.onDone(this.props.task.id);
    };

    render() {
        return (
            <div className="task">
                <input type="checkbox" checked={this.state.done} onChange={this.handleInputChange} name = "done"/>
                <p className="task-name">{this.props.task.name}</p>
                <span className="time">{this.props.task.start}</span>
                <span className="line"></span>
            </div>
        );
    }
}

// const mapStateToProps = (state) => {
//     return {
//         toggle: state.toggle
//     };
// };

const mapDispatchToprops = (dispatch) => {
    return {
        onDone : (id) =>{
            dispatch(actions.doneTask(id))
        }
    };
};

export default connect(null,mapDispatchToprops)(Task);