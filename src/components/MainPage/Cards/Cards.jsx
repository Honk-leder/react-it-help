import {db} from "../../../firebase";
import {ref, get, child} from "firebase/database";
import {useEffect, useState} from "react";
import s from './Card.module.css';

export default function Cards(props) {
    const dbRef = ref(db);
    let [data, changeData] = useState();
    let array = []
    useEffect(() => {
        get(child(dbRef, props.content))
            .then((snapshot) => snapshot.val())
            .then(e => e).then(response => changeData(response));
    }, []);
    for (let key in data) {
        array.push(data[key])
    }

    return (array.map((elem) => {
        if (props.content === 'resume') {
            return (
                <CardResume data={elem}/>
            )
        } else {
            return (
                <CardVacancy data={elem}/>
            )
        }
    }))
}

function CardVacancy(props) {
    return (
        <div className={s.container}>
            <div>
                <img className={s.image}
                    src={'https://cdn3.iconfinder.com/data/icons/human-resources-management/512/craidlist_vacancy_jobs-256.png'}
                />
            </div>
            <div>
                <h3>{props.data.position}</h3>
                <p>{props.data.salary}</p>
                <p>{props.data.employment}</p>
                <p>{props.data.responsibility}</p>
                <p>{props.data.knowlage}</p>
                <p>{props.data.stack}</p>
            </div>
        </div>
    )
}

function CardResume(props) {
    return (
        <div className={s.container}>
            <div>
                <img className={s.image} src={'https://cdn-icons-png.flaticon.com/512/5673/5673945.png'}/>
            </div>
            <div>
                <h3>{props.data.position}</h3>
                <div>
                    <p>{props.data.firstName} {props.data.name} {props.data.lastName}</p>
                    <p>{props.data.age} лет</p>
                </div>
                <p>Образование:{props.data.education}</p>
                <p>Опыт:{props.data.exp}</p>
                <p>Умения:{props.data.skills}</p>
                <p>Ссылки на проекты:<a href={props.data.projects}>{props.data.projects}/></a></p>
                <p>{props.data.phone}</p>
                <p>{props.data.email}</p>

            </div>
        </div>

    );
}

