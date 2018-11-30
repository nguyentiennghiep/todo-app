import * as types from '../constraint/type';

const initialState = {
    display: false
}

const toggleReducer = function (state = initialState, action) {
    switch (action.type) {
        case types.TOGGLE_ON: {
            return { display: true }
        }
        case types.TOGGLE_OFF: {
            return { display: false }
        }
        default: return state;
    }
};


export default toggleReducer;