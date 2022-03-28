import React from "react";
import s from "./MessagesPage.module.css"
import {NavLink, Route, Routes} from "react-router-dom";
import UserMessage from "./UserMessage/UserMessage";
import Messages from "./Messages/Messages";

function MessagesPage(props){
    let users= [{email:"zubakinr03", name:"Renat",message:["4"]},
        {email:"zub33kinr03", name:"R333enat",message:["3"]},
        {email:"zuba343kinr03", name:"R34enat",message:["2"]},
        {email:"zuba343kinr03", name:"R332enat",message:["1",'fjgggggg gfgfgfg fgfgfgfg',
            'ddddddddddddddddddddddddddddddsssssssssss ssssssssssssssss sssssssssssssssssss']}]
    return(
        <div className={s.container}>
            <div className={s.names}>
                {users.map(function(e){
                    return <UserMessage name={e.name} email={e.email}/>
                    }
                )}
            </div>
            <div className={s.messages}>
                <Routes path={'/messages'}>
                    {users.map(function (e){
                        return <Route path={e.name} element={<Messages messages={e.message}/>}/>
                    })}
                </Routes>
            </div>
        </div>
    )
}
export default MessagesPage;