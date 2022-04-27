import React from "react";
import AddBtn from "../AddBtn/AddBtn";
import {Routes,Route} from "react-router-dom";
import AddResumeForm from "./AddResumeForm/AddResumeForm";
export default function ResumePage(props){
    return(
        <div>
            <AddBtn path={'addResume'} text={'Добавить резюме'}/>
            <Routes>
                <Route path={'addResume'} element={<AddResumeForm/>}/>
            </Routes>
        </div>

    )
}