import * as actions from './actionTypes';
import messages from "../components/MessagesPage/Messages/Messages";

export function sendMessage(values){
    return({
            type: actions.ACTION_SEND_MESSAGE,
            name: values.name,
            email: values.email,
            message: values.message
        }
    )
};