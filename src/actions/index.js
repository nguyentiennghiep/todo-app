import * as types from '../constraint/type';

export const addTask = (task) => {
    return {
        type: types.ADD,
        task
    };
};