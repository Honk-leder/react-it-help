import React from "react";
import {BrowserRouter, NavLink} from "react-router-dom";
import s from "./Navbar.module.css";

function Navbar(props){
    return(
            <section className={s.section}>
                <div className={s.item}>
                    <NavLink className={s.link} to={'/first'}>Страница два</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink className={s.link} to={'/second'}>Страница три</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink className={s.link} to={'/contact'}>Обратная связь</NavLink>
                </div>
            </section>
    )
}
export default Navbar;

