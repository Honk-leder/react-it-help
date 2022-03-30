import * as actions from './actionTypes';

export default function reducer(state=[], action){
    switch (action.type){
        case actions.ACTION_SEND_MESSAGE:
            return [...state,{
                name: action.name.replace(' ',''),
                email: action.email,
                message:action.message
        }];
        default: return state;
    }

}