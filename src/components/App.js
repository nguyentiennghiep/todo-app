import * as React from 'react';
import '../public/style.css';
import { connect } from 'react-redux';
import Task from './Task';
import AddFrom from './AddForm';
import * as actions from '../actions/index';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick = () => {
        this.props.onToggle();
    }

    handleReset = () => {
        window.confirm("Are you sure you wish to reset all tasks?") &&
            this.props.onReset()
    }

    render() {
        const { tasks } = this.props;
        const taskList = tasks.map((task, index) => {
            return <Task task={task} key={index} />;
        });
        const count = tasks.reduce((count, task) => {
            if (task.done === false) {
                return count + 1;
            }
            return count;
        }, 0);
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="container">
                        <div className="top">
                            <div className="header">
                                <h2>Todo List</h2>
                                <span onClick={this.handleClick}><i className="fas fa-plus"></i> </span>
                            </div>
                            <h3>{count} tasks</h3>
                            <span onClick={this.handleReset}>Reset Tasks</span>
                        </div>
                    </div>
                    <div className="tasks-list">
                        {taskList}
                    </div>
                </div>
                <AddFrom />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    };
};

const mapDispatchToprops = (dispatch) => {
    return {
        onToggle: () => {
            dispatch(actions.toggleOn());
        },
        onReset: () => {
            dispatch(actions.resetTasks());
        }
    };
};


export default connect(mapStateToProps, mapDispatchToprops)(App);