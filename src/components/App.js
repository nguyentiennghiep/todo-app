import * as React from 'react';
import '../public/style.css';
import Task from './Task';

class App extends React.Component {
    render() {
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
                    <Task />
                    <Task />
                    <div className="task">
                        <input type="checkbox" />
                        <p className="task-name">Morning Walk</p>
                        <span className="time">7.00 am</span>
                        <span className="line"></span>
                    </div>
                    <div className="task">
                        <input type="checkbox" />
                        <p className="task-name">Morning Walk</p>
                        <span className="time">7.00 am</span>
                        <span className="line"></span>
                    </div>
                    <div className="task" >
                        <input type="checkbox" />
                        <p className="task-name">Morning Walk</p>
                        <span className="time">7.00 am</span>
                        <span className="line"></span>
                    </div>
                    <div className="task">
                        <input type="checkbox" />
                        <p className="task-name">Morning Walk</p>
                        <span className="time">7.00 am</span>
                        <span className="line"></span>
                    </div>
                    <div className="task">
                        <input type="checkbox" />
                        <p className="task-name">Morning Walk</p>
                        <span className="time">7.00 am</span>
                        <span className="line"></span>
                    </div>
                    <div className="task">
                        <input type="checkbox" />
                        <p className="task-name">Mng Walk</p>
                        <span className="time">7.00 am</span>
                        <span className="line"></span>
                    </div>
                    <div className="task">
                        <input type="checkbox" />
                        <p className="task-name">Walk</p>
                        <span className="time">7.00 am</span>
                        <span className="line"></span>
                    </div>
                    <div className="task">
                        <input type="checkbox" />
                        <p className="task-name">Morning</p>
                        <span className="time">7.00 am</span>
                        <span className="line"></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;