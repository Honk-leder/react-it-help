import * as actions from './actionTypes';

export default function reducer(state=[], action){
    console.log(state);
    switch (action.type){
        case actions.ACTION_SEND_MESSAGE:
            return addMessage(state,action);
        default: return state;
    }
}

function addMessage(state, action) {
    let name=action.name.replace(' ','');

    for(let i=0;i<state.length;i++){
        if (state[i].name===name) {
            state[i].message.push([action.sender,action.message]);
            return state;
        }
    }
    return [...state, {
        name: action.name.replace(' ', ''),
        email: action.email,
        message: [[action.sender,action.message]],
    }];


}