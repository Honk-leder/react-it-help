import React from 'react'
import BtnBlock from "./BtnBlock/BtnBlock";
import {Routes,Route} from "react-router-dom";
import ResumePage from "./ResumePage/ResumePage";
import s from './MainPage.module.css'
import VacancyPage from "./VacancyPage/VacancyPage";
import AddResumeForm from "./ResumePage/AddResumeForm/AddResumeForm";

export default function MainPage(props){
    return(
        <div className={s.body}>
            <BtnBlock/>
            <Routes>
                <Route path='resume/*' element={<ResumePage/>}/>
                <Route path='vacancy/*' element={<VacancyPage/>}/>
            </Routes>
        </div>
    );
};