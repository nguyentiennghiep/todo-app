import React from 'react';

class Task extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="task">
                    <input type="checkbox" checked={this.props.task.done}/>
                    <p className="task-name">{this.props.task.name}</p>
                    <span className="time">{this.props.task.start}</span>
                    <span className="line"></span>
                </div>
            </React.Fragment>
        );
    }
}

export default Task;