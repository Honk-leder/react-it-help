import {db} from "../../../firebase";
import {ref, get, child,remove} from "firebase/database";
import {useEffect, useState} from "react";
import s from './Card.module.css';
import {useCookies} from "react-cookie";
import CardResume from "./CardResume/CardResume";
import CardVacancy from "./CardVacancy/CardVacancy";



export default function Cards(props) {
    const dbRef = ref(db);
    let [cookies,setCookies]=useCookies()
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
                <CardResume cookies={cookies} data={elem}/>
            )
        } else {
            return (
                <CardVacancy cookies={cookies} data={elem}/>
            )
        }
    }))
}







