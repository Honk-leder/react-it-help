import {NavLink, Route} from "react-router-dom";
import s from './QuestionCard.module.css'
import {useState} from "react";
import {useCookies} from "react-cookie";

export default function QuestionCard(props){
    let [answer,changeAnswer]=useState('-1');
    let [cookie,setCookies]=useCookies()

    function btnOnclick(){
        setCookies('quizAnswers',cookie['quizAnswers']+''+answer,{path:'/'})
    }

    return(
            <div className={s.testWrapper}>
                <h2 className={s.question}><span>{props.data.questionNumber}</span>{props.data.question}</h2>
                <div className={s.options}>
                    <input className={s.questionOptions} onChange={(e)=>changeAnswer(e.target.value)}  type="radio" id="q1" name={'q'+props.data.path} value={props.data.value1}/>
                    <label htmlFor="q1">{props.data.var1}</label>
                </div>
                <div className={s.options}>
                    <input className={s.questionOptions} onChange={(e)=>changeAnswer(e.target.value)}  type="radio" id="q2" name={'q'+props.data.path} value={props.data.value2}/>
                    <label htmlFor="q2">{props.data.var2}</label>
                </div>
                <div className={s.options}>
                    <input className={s.questionOptions} onChange={(e)=>changeAnswer(e.target.value)}  type="radio" id="q3" name={'q'+props.data.path} value={props.data.value3}/>
                    <label htmlFor="q3">{props.data.var3}</label>
                </div>
                <div className={s.options}>
                    <input className={s.questionOptions} onChange={(e)=>changeAnswer(e.target.value)}  type="radio" id="q4" name={'q'+props.data.path} value={props.data.value4}/>
                    <label htmlFor="q4">{props.data.var4}</label>
                </div>
                <div className={s.questionButton}>
                    <NavLink  to={'/quiz/'+props.data.link}>
                        <input  onClick={btnOnclick} className="next-page-button" type="submit" value={props.data.next}/>
                    </NavLink>
                </div>
            </div>
    )
}

