import React, {useState} from "react";
import Messages from "./Messages/Messages";
import s from'./Dialogs.module.css';
import {useDispatch} from "react-redux";
import * as actions from "../../../store/actions";

function Dialogs(props) {
    const dispatch = useDispatch();

    const [adminMessage, setAdminMessage] = useState('');

    const submitMessage = () => {
        if(adminMessage.length!==0)
        dispatch(actions.sendMessage({
            name:props.name,
            email:props.email,
            message:adminMessage,
            sender:'admin'
        }));
        setAdminMessage('')
    }

    return (
        <div className={s.container}>
            <div className={s.messages}>
                <Messages message={props.message}/>
            </div>
            <div >
                <form className={s.form} action="/" method={""}>
                    <textarea  className={s.textarea } id={'message'} required name={"message"}
                               placeholder={"Сообщение.."} value={adminMessage}
                               onChange={e => setAdminMessage(e.target.value)}/>
                    <input className={s.btn} type="button" onClick={submitMessage} id='submit' value='&#10097;'/>
                </form>
            </div>
        </div>
    )
}
export default Dialogs;