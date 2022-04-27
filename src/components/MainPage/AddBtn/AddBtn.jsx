import s from "./AddBtn.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

export default function AddBtn(props){
    return(
        <div className={s.btn}>
            <NavLink className={s.item} to={props.path}>{props.text}</NavLink>
        </div>
    )
}