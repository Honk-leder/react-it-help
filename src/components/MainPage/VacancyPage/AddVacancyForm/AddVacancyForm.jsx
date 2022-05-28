import React, {useState} from "react";
import {db} from "../../../../firebase";
import {ref, set} from "firebase/database";
import s from './AddVacancyForm.module.css'
import {useCookies} from "react-cookie";

export default function AddVacancyForm(props) {
    const [cookies, setCookie] = useCookies();
    const refer=ref(db, 'vacancy/'+cookies.userEmail.split('@')[0]);

    let [position,changePosition]= useState('Верстальщик');
    let [salary,changeSalary]=useState('')
    let [stack,changeStack]=useState('');
    let [responsibility,changeResponsibility]=useState('')
    let [knowlage,changeKnowlage]=useState('')
    let [employment,changeEmployment]= useState('Полная занятость')

    function hendlerSubmit(e){
        set(refer,{
            author:cookies.userEmail.split('@')[0],
           position:position,
            salary:salary,
            stack:stack,
            responsibility:responsibility,
            knowlage:knowlage,
            employment:employment
        })
    }
    return (
        <div className={s.container}>
            <img className={s.image} src={require('../../ResumePage/AddResumeForm/addResume.png')}/>
            <h1 className={s.h}>Добавить вакансию:</h1>
            <form className={s.form}>
                <h2> Создайтие и разместите вакансию</h2>
                <div className={s.form1}>
                    <h3>На какую должность нужен работник</h3>
                    <select className={s.formItem}
                            value={position}
                            onChange={e=>changePosition(e.target.value)}
                    >
                        <option value={'Верстальщик'}>Верстальщик</option>
                        <option value={'Бекендер'}>Бекендер</option>
                        <option value={'Аналитик'}>Аналитик</option>
                        <option value={'Дизайнер'}>Дизайнер</option>
                    </select>
                    <h3>Заработная плата</h3>
                    <input className={s.formItem}
                           placeholder={'В рублях'}
                           type={'text'}
                           value={salary}
                           onChange={e=>changeSalary(e.target.value)}
                    />
                    <h3>Требования к работнику</h3>
                    <textarea className={s.formItem}
                              placeholder={'Каким стеком должен обладать'}
                              value={stack}
                              onChange={e=>changeStack(e.target.value)}
                    />
                    <h3> Обязанности</h3>
                    <textarea className={s.formItem}
                            placeholder={'Чем будет заниматься на работе'}
                           value={responsibility}
                           onChange={e=>changeResponsibility(e.target.value)}
                    />
                    <h3>Будет плюсом если работник будет обладать</h3>
                    <textarea className={s.formItem}
                           placeholder={'Знания которые дадут приемущество при устройстве'}
                              value={knowlage}
                              onChange={e=>changeKnowlage(e.target.value)}
                    />
                    <h3>Занятость в работе:</h3>
                    <select className={s.formItem}
                            value={employment}
                            onChange={e=>changeEmployment(e.target.value)}
                    >
                        <option value={'Полная занятость'}>Полная занятость</option>
                        <option value={'Не полная занятость'}>Не полная занятость</option>
                        <option value={'Гибкий график'}>Гибкий график</option>
                    </select>
                    <input  className={s.formBtn} type={'submit'} onClick={hendlerSubmit}/>
                </div>
            </form>
        </div>
    );
}