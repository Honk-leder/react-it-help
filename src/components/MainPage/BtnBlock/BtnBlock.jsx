import {NavLink} from "react-router-dom";
import s from './BtnBlock.module.css';
import React from "react";

export default function BtnBlock() {
    return(
        <div className={s.btnBlock}>
            <NavLink to={'/resume'} className={s.btn}>Резюме</NavLink>
            <NavLink to={'/vacancy'} className={s.btn}>Вакансии</NavLink>
        </div>
)
}