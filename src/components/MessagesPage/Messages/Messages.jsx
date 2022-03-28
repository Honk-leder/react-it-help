import React from "react";
import messagesPage from "../MessagesPage";
import s from "./Messages.module.css"
function Messages(props){
    return(
        props.messages.map(function(e){
           return  <div className={s.item}>{e}</div>
        })
    )
}

export default Messages