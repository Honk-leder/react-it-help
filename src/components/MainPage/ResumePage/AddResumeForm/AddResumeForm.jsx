import React, {useState} from "react";
import s from './addResumeForm.module.css';
import {db} from "../../../../firebase";
import {ref,push } from "firebase/database";

export default function AddResumeForm(props){
    const dbRef = ref(db,'resume');

    let [firstName,changeFirstName]=useState('');
    let [name,changeName]=useState('');
    let [lastName,changeLastName]=useState('');
    let [age,changeAge]=useState('');
    let [phone,changePhone]=useState('');
    let [email,changeEmail]=useState('');
    let [position,changePosition]=useState('');
    let [education,changeEducation]=useState('');
    let [exp,changeExp]=useState('');
    let [skills,changeSkills]=useState('');
    let [projects,changeProjects]=useState('');

    function hendlerSubmit(e){
        push(dbRef,{
            firstName:firstName,
            name:name,
            lastName:lastName,
            age:age,
            phone:phone,
            email:email,
            position:position,
            education:education,
            exp:exp,
            skills:skills,
            projects:projects
        })
    }


    return(
        <div className={s.container}>
            <img className={s.image} src={require('./addResume.png')}/>
            <h1 className={s.h}>Создайте свою карточку:</h1>
            <form className={s.form}>
                <h2> Личные данные</h2>
                <div className={s.form1}>
                    <input className={s.formItem}
                           placeholder={'Фамилия'}
                           type={'text'}
                           value={firstName}
                           onChange={e=>changeFirstName(e.target.value)}/>
                    <input className={s.formItem}
                           placeholder={'Имя'}
                           type={'text'}
                           value={name}
                           onChange={e=>changeName(e.target.value)}
                    />
                    <input className={s.formItem}
                           placeholder={'Отчество'}
                           type={'text'}
                           value={lastName}
                           onChange={e=>changeLastName(e.target.value)}
                    />
                    <input className={s.formItem}
                           placeholder={'Сколько полных лет'}
                           type={'text'}
                           value={age}
                           onChange={e=>changeAge(e.target.value)}
                    />
                    <input className={s.formItem}
                           placeholder={'Номер телефона'}
                           type={'text'}
                           value={phone}
                           onChange={e=>changePhone(e.target.value)}
                    />
                    <input className={s.formItem}
                           placeholder={'Почта'}
                           type={'text'}
                           value={email}
                           onChange={e=>changeEmail(e.target.value)}/>
                </div>
                <h2>Дополнительные данные</h2>
                <div className={s.form2}>
                    <p>На какую должность вы претендуете:</p>
                       <select className={s.form2Item} value={position} onChange={e=>changePosition(e.target.value)}>
                           <option value={'Верстальщик'}>Верстальщик</option>
                           <option value={'Бекендер'}>Бекендер</option>
                           <option value={'Аналитик'}>Аналитик</option>
                           <option value={'Дизайнер'}>Дизайнер</option>
                       </select>
                    <p>В каком ВУЗе, на каком факультете и специальности вы учились/учитесь на каком курсе?</p>
                        <textarea className={s.form2Item} type={'text'} value={education} onChange={e=>changeEducation(e.target.value)}/>
                    <p>Есть ли у вас опыт работы</p>
                    <select className={s.form2Item} value={exp} onChange={e=>changeExp(e.target.value)}>
                        <option value={'больше 3 лет'}>больше 5 лет</option>
                        <option value={'3 года'}>3 года</option>
                        <option value={'2 года'}>2 года</option>
                        <option value={'1 год '}>1 год </option>
                        <option value={'без опыта'}>без опыта</option>
                    </select>
                    <p>Расскажите, что умеете. Какие технологии, фреймворки используете</p>
                    <textarea className={s.form2Item} value={skills} onChange={e=>changeSkills(e.target.value)}/>
                    <p>Можете оставить ссылки на свои проекты</p>
                    <textarea className={s.form2Item} value={projects} onChange={e=>changeProjects(e.target.value)}/>
                    <input  className={s.form2Item} type={'submit'} onClick={hendlerSubmit}/>
                </div>
            </form>
        </div>
    )
}