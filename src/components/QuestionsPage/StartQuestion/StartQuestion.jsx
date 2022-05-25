import {NavLink} from "react-router-dom";
import s from './StartQuestion.module.css'


export default function Start(){
    return (
        <div className={s.startTest}>
            <NavLink to={"1"}><input className={s.startButton} type="button" value="НАЧАТЬ"/></NavLink>
        </div>
    )
}
