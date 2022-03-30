import React from "react";
import messagesPage from "../MessagesPage";
import s from "./Messages.module.css"
function Messages(props){
    console.log(props.messages)
    return(
        <div className={s.item}>{props.messages}</div>
    )
}

export default Messages