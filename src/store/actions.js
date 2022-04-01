import * as actions from './actionTypes';

export function sendMessage(values){
    return({
            type: actions.ACTION_SEND_MESSAGE,
            name: values.name,
            email: values.email,
            message: values.message,
            sender:values.sender
        }
    )
};