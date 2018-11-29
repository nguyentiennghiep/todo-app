import * as React from 'react';
import '../public/style.css';
import { connect } from 'react-redux';
import Task from './Task';

class App extends React.Component {
    render() {
        const { tasks } = this.props;
        const taskList = tasks.map((task, index) => {
            return <Task task={task} key={index} />;
        });
        return (
            <div className="container-fluid">
                <div className="container">
                    <div className="top">
                        <div className="header">
                            <h2>Wednesday, 22 Nov</h2>
                            <span><i className="fas fa-plus"></i> </span>
                        </div>
                        <h3>3 tasks</h3>
                    </div>
                </div>
                <div className="tasks-list">
                    {taskList}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    };
};

export default connect(mapStateToProps, null)(App);