const initialState = [
    {
        name: 'Walking',
        done: true,
        start: '7:00 am'
    },
    {
        name: 'Swim',
        done: false,
        start: '9:15 am'
    },
    {
        name: 'Running',
        done: false,
        start: '11:20 am'
    },
    {
        name: 'Coding',
        done: false,
        start: '2:15 pm'
    },
    {
        name: 'Cook dinner',
        done: true,
        start: '6:15 pm'
    },
];

const tasksReducer = function (state = initialState, action) {
    switch (action.type) {
        default: return state;
    }
};


export default tasksReducer;