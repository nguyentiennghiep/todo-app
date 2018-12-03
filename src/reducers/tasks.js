import * as types from '../constraint/type';
import uuidv1 from 'uuid/v1';
import { dirname } from 'path';



let initialState = JSON.parse(localStorage.getItem("tasks"));

if(!initialState){
    initialState = [];
}

function findIndex(id,tasks){
    let result = -1;
    tasks.forEach((task,index) => {
        if(task.id === id )
        {
            result = index;
        }    
    });
    return result;
}

const tasksReducer = function (state = initialState, action) {
    switch (action.type) {
        case types.ADD :{   
            const id = uuidv1();
            action.task.id = id;
            let newState = [].concat(state);           
            newState = newState.concat(action.task);
            localStorage.setItem("tasks", JSON.stringify(newState));
            return newState;
        }
        case types.DONE :{   
            let newState  = [...state];
            const index = findIndex(action.id,state);
            if(index >= 0)
            {
                newState[index].done = !newState[index].done;
            }
            localStorage.setItem("tasks", JSON.stringify(newState));
            return newState;
        }
        case types.RESET :{   
            let newState  = [];
            localStorage.setItem("tasks", JSON.stringify(newState));
            return newState;
        }
        default:{ 
            return state;
        }
    }
};


export default tasksReducer;