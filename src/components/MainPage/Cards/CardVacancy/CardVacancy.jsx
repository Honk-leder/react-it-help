import s from './CardVacancy.module.css'
import {ref, remove} from "firebase/database";
import {db} from "../../../../firebase";

export default function CardVacancy(props) {

    function deleteOnClick(){
        if(props.data.author===props.cookies.userEmail.split('@')[0]){
            remove(ref(db,'vacancy/'+props.data.author));
        }
    }

    return (
        <div className={s.container}>
            <div><button  onClick={(e)=>deleteOnClick()}>удалить</button> </div>
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