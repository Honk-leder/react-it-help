import React from "react";
import s from './addResumeForm.module.css';

export default function AddResumeForm(props){
    return(
        <div className={s.container}>
            <img className={s.image} src={require('./addResume.png')}/>
            <h1 className={s.h}>Создайте свою карточку:</h1>
            <form className={s.form}>
                <h2> Личные данные</h2>
                <div className={s.form1}>
                    <input className={s.formItem} placeholder={'Фамилия'} type={'text'} id={'surname'}/>
                    <input className={s.formItem} placeholder={'Имя'} type={'text'} id={'name'}/>
                    <input className={s.formItem} placeholder={'Отчество'} type={'text'} id={'name'}/>
                    <input className={s.formItem} placeholder={'Сколько полных лет'} type={'text'} id={'dateOfBurth'}/>
                    <input className={s.formItem} placeholder={'Номер телефона'} type={'text'} id={'phoneNumber'}/>
                    <input className={s.formItem} placeholder={'Почта'} type={'text'} id={'email'}/>
                </div>
                <h2>Дополнительные данные</h2>
                <div className={s.form2}>
                    <p>На какую должность вы претендуете:</p>
                       <select className={s.form2Item} id={'position'}>
                           <option value={'Верстальщик'}>Верстальщик</option>
                           <option value={'Бекендер'}>Бекендер</option>
                           <option value={'Аналитик'}>Аналитик</option>
                           <option value={'Дизайнер'}>Дизайнер</option>
                       </select>
                    <p>В каком ВУЗе, на каком факультете и специальности вы учились/учитесь на каком курсе?</p>
                        <textarea className={s.form2Item} type={'text'} id={'education'}/>
                    <p>Есть ли у вас опыт работы</p>
                    <select className={s.form2Item} id={'exp'}>
                        <option value={'больше 3 лет'}>больше 5 лет</option>
                        <option value={'3 года'}>3 года</option>
                        <option value={'2 года'}>2 года</option>
                        <option value={'1 год '}>1 год </option>
                        <option value={'без опыта'}>без опыта</option>
                    </select>
                    <p>Расскажите, что умеете. Какие технологии, фреймворки используете</p>
                    <textarea className={s.form2Item} id={'skills'}/>
                    <p>Можете оставить ссылки на свои проекты</p>
                    <textarea className={s.form2Item} id={'projects'}/>
                </div>

            </form>
        </div>
    )
}