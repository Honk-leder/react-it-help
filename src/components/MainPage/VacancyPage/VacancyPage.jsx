import React from "react";

import AddBtn from "../AddBtn/AddBtn";
import {Route, Routes} from "react-router-dom";
import AddVacancyForm from "./AddVacancyForm/AddVacancyForm";
import Cards from "../Cards/Cards";

export default function VacancyPage(props) {
    return (
        <div>
            <AddBtn path={'addVacancy'} text={'Добавить вакансию'}/>
            <Routes>
                <Route index element={<Cards content={'vacancy'}/>}/>
                <Route path={'addVacancy'} element={<AddVacancyForm/>}/>
            </Routes>
        </div>
    )
}