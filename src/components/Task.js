import React from 'react';

class Task extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="task">
                    <input type="checkbox" />
                    <p className="task-name">Molk</p>
                    <span className="time">7.00 am</span>
                    <span className="line"></span>
                </div>
            </React.Fragment>
        );
    }
}

export default Task;