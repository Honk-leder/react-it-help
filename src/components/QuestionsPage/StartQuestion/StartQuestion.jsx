import {NavLink} from "react-router-dom";
import s from './StartQuestion.module.css'
import {useCookies} from "react-cookie";


export default function Start(){
    let [cookie,setCookies,removeCookies]=useCookies('quizAnswers')
    setCookies('quizAnswers','',{path:'/'})
    return (
        <div className={s.startTest}>
            <NavLink to={"1"}><input className={s.startButton} type="button" value="НАЧАТЬ"/></NavLink>
        </div>
    )
}
