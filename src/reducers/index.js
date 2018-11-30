import { combineReducers } from 'redux';
import tasks from './tasks';
import toggle from './toggle-reducer'; 

const rootReducer = combineReducers({
    tasks,
    toggle

});

export default rootReducer;