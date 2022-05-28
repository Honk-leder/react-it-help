import React from "react";
// @ts-ignore
import s from "./Header.module.css";
import Navbar from "./Navbar/Navbar";
import Authorisation from "../Authorisation/Authorisation";
import {NavLink} from "react-router-dom";
import {useCookies} from "react-cookie";

export default function Header(props){
    let [cookies,setCookies,removeCookies]=useCookies()
    return(
        <section className={s.header}>
            <section className={s.container}>
                <section className={s.logo}>
                    <img className={s.image} src={require('./logo.png')} alt="Логотип"></img>
                    <a href="/" className={s.text}>IT-help</a>
                </section>
                <Navbar/>
                <div>
                    <NavLink to={'/auth'}>Войти</NavLink>
                </div>
            </section>
        </section>
    )
}

function LoginContainer(props){

    function logOutOnclick(){
        console.log(props.cookies)
        props.removeCookies(props.cookies)
        console.log('fgfg')
    }

    if(props.cookies){
        return(
            <div>
                <p>{props.cookies['userEmail']}</p>
                <button onClick={logOutOnclick}>Выйти</button>
            </div>
        )
    }
    else {
        return(
            <NavLink to={'/auth'}>Войти</NavLink>
        )
    }
}
