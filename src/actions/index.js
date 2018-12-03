import * as types from '../constraint/type';

export const addTask = (task) => {
    return {
        type: types.ADD,
        task
    };
};


export const toggleOn = () => {
    return {
        type: types.TOGGLE_ON,
    };
};

export const toggleOff = () => {
    return {
        type: types.TOGGLE_OFF,
    };
};

export const doneTask = (id) =>{
    return {
        type: types.DONE,
        id
    }
}

export const resetTasks = () =>{
    return {
        type: types.RESET
    }
}