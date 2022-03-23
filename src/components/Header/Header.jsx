import React from "react";
// @ts-ignore
import s from "./Header.module.css";
import Navbar from "./Navbar/Navbar";

function Header(props){
    return(
        <section className={s.header}>
            <section className={s.container}>
                <section className={s.logo}>
                    <img className={s.image} src={require('./logo.png')} alt="Логотип"></img>
                    <a href="/" className={s.text}>IT-help</a>
                </section>
                <Navbar/>
            </section>
        </section>
    )
}

export default Header;