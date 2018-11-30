import * as types from '../constraint/type'

const initialState = [
    {
        name: 'Swim',
        done: false,
        start: '9:15 am'
    },
    {
        name: 'Running',
        done: false,
        start: '11:20 am'
    }
];

const tasksReducer = function (state = initialState, action) {
    switch (action.type) {
        case types.ADD :{   
            let newState = [].concat(state);
            newState = newState.concat(action.task);
            console.log(newState);
            return newState;
        }
        default: return state;
    }
};


export default tasksReducer;