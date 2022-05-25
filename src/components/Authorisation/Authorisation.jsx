import s from "../Header/Navbar/Navbar.module.css";
import {NavLink} from "react-router-dom";
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import * as actions from "../../store/actions";


export default function Authorisation(props){
    const [email,changeEmail]=useState('')
    const [password,changePassword]=useState('');
    const dispatch = useDispatch();

    function SubmitOnClick(){
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(user=>{
                console.log(user)
                dispatch(actions.loginUser({
                    email:user.email,
                    token:user.accessToken
                }));
            })

    }
    return(
        <div>
            <h1>Войдите в аккаунт:</h1>
            <input type={'text'} value={email} onChange={e=>{changeEmail(e.target.value)}} placeholder={'Email адресс'}/>
            <input type={'password'} value={password} onChange={e=>{changePassword(e.target.value)}} placeholder={'Пароль'}/>
            <input type={'button'} value={'Войти'} onClick={SubmitOnClick}/>
        </div>
    )
};

