import {ref, remove} from "firebase/database";
import {db} from "../../../../firebase";
import s from './CardResume.module.css'

export default function CardResume(props) {

    function deleteOnClick(){
        if(props.data.author===props.cookies.userEmail.split('@')[0]){
            remove(ref(db,'resume/'+props.data.author));
        }
    }

    return (
        <div className={s.container}>
            <div>
                <button
                    className={(props.data.author!==props.cookies.userEmail.split('@')[0]) ? s.hiddenBtn : s.deleteBtn}
                    onClick={(e)=>deleteOnClick()}>
                    удалить
                </button> </div>
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