import React from "react";
import s from "./UserMessage.module.css"
import {NavLink} from "react-router-dom";

function UserMessage(props){
    return(
            <NavLink to={`${props.name}`}>
                <div className={s.item}>
                    <img className={s.image}
                         src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"}/>
                    <div className={s.text}>
                        <p className={s.name}>{props.name}</p>
                        <p className={s.email}>{props.email}</p>
                    </div>
                </div>
            </NavLink>
    )
}

export default UserMessage;