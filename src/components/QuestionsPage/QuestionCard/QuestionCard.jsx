import {NavLink, Route} from "react-router-dom";
import s from './QuestionCard.module.css'

export default function QuestionCard(props){
    return (
            <div className={s.testWrapper}>
                <h2 className={s.question}><span>{props.data.questionNumber}</span>{props.data.question}</h2>
                <div className={s.options}>
                    <input className={s.questionOptions} type="radio" id="q1" name="q1" value={props.data.value1}/>
                    <label htmlFor="q1">{props.data.var1}</label>
                </div>
                <div className={s.options}>
                    <input className={s.questionOptions} type="radio" id="q2" name="q2" value={props.data.value2}/>
                    <label htmlFor="q2">{props.data.var2}</label>
                </div>
                <div className={s.options}>
                    <input className={s.questionOptions} type="radio" id="q3" name="q3" value={props.data.value3}/>
                    <label htmlFor="q3">{props.data.var3}</label>
                </div>
                <div className={s.options}>
                    <input className="question-options" type="radio" id="q4" name="q4" value={props.data.value4}/>
                    <label htmlFor="q4">{props.data.var4}</label>
                </div>
                <div className={s.questionButton}>
                    <NavLink  to={props.data.link}><input className="next-page-button" type="button" value={props.data.next}/></NavLink>
                </div>
            </div>
    )
}