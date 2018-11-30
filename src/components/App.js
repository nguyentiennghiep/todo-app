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

    render() {
        const { tasks } = this.props;
        const taskList = tasks.map((task, index) => {
            return <Task task={task} key={index} />;
        });
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="container">
                        <div className="top">
                            <div className="header">
                                <h2>Todo List</h2>
                                <span onClick={this.handleClick}><i className="fas fa-plus"></i> </span>
                            </div>
                            <h3>{tasks.length} tasks</h3>
                        </div>
                    </div>
                    <div className="tasks-list">
                        {taskList}
                    </div>
                </div>
                <AddFrom/>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    };
};

const mapDispatchToprops = (dispatch ) => {
    return {
        onToggle : () => {
            dispatch(actions.toggleOn());
        }
    };
};


export default connect(mapStateToProps, mapDispatchToprops)(App);