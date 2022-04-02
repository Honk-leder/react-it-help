
import s from "./Messages.module.css"
function Messages(props){
    return(
        props.message.map(function (e){
           return (
               <div className={e[0]==='user'? s.user: s.admin}>{e[1]}</div>
           )
        })
    )
}

export default Messages