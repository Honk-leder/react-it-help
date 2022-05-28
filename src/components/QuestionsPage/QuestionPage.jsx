import {Route, Routes} from "react-router-dom";
import Start from "./StartQuestion/StartQuestion";
import s from './QuestionPage.module.css'
import QuestionCard from "./QuestionCard/QuestionCard";
import ResultQuestion from "./ResultQuestion/ResultQuestion";
import {useState} from "react";
import {useCookies} from "react-cookie";

export default function QuestionPage(props){


    return(
        <div className={s.quizContainer}>
            <h1 className={s.testTitle}>Какая профессия подойдет Вам в нашей компании?</h1>
            <Routes>
                <Route index element={<Start/>}/>
                {store.questions.map((question)=>{
                        return(
                            <Route path={question.path} element={<QuestionCard data={question}/>}/>
                        )
                })}
                <Route path={'result'} element={<ResultQuestion/>}/>
            </Routes>
        </div>
    )
}

const store = {
    questions: [
        {
            questionNumber: 'Вопрос 1:',
            question: ' что для тебя в работе главное?',
            var1: 'Создавать что-то важное для общества',
            var2: 'Ощущение значимости того, что я делаю',
            var3: 'Реализация себя как профессионала',
            var4: 'Возможность помогать людям',
            value1: '1',
            value2: '2',
            value3: '3',
            value4: '4',
            path: '1',
            link: '2',
            next: 'Следующий'
        },
        {
            questionNumber: 'Вопрос 2:',
            question: ' какой график тебе больше подходит?',
            var1: 'Желательно, чтобы я мог работать в комфортное для себя время',
            var2: 'Хочу стабильный график, посменный, без переработок',
            var3: 'Если работа в удовольствие, можно заниматься ей хоть в выходные',
            var4: 'Неважно! Главное, чтобы было интересно',
            value1: '1',
            value2: '2',
            value3: '3',
            value4: '4',
            path: '2',
            link: '3',
            next: 'Следующий'
        },
        {
            questionNumber: 'Вопрос 3:',
            question: ' как складываются отношения с людьми на работе?',
            var1: 'Лучше бы ни с кем не контактировать, или хотя бы только онлайн',
            var2: 'Мне комфортнее выдерживать дистанцию заказчик — исполнитель',
            var3: 'У меня прекрасные отношения и в коллективе, и с клиентами. Я очень люблю общаться!',
            var4: 'Мне приятнее общаться с машиной, но люди тоже подойдут',
            value1: '1',
            value2: '2',
            value3: '3',
            value4: '4',
            path: '3',
            link: '4',
            next: 'Следующий'
        },
        {
            questionNumber: 'Вопрос 4:',
            question: ' какие у тебя отношения с интернетом?',
            var1: 'Прекрасные. Я и работаю, и отдыхаю в виртуальной реальности',
            var2: 'Он для меня — неотъемлемая часть жизни, как для всего прогрессивного человечества',
            var3: 'Посерфить в сети люблю, но считаю, что интернету не хватает немного цензуры',
            var4: 'Захожу часто, зависаю в соцсетях, читаю научную литературу',
            value1: '1',
            value2: '2',
            value3: '3',
            value4: '4',
            path: '4',
            link: '5',
            next: 'Следующий'
        },
        {
            questionNumber: 'Вопрос 5:',
            question: ' любишь путешествовать?',
            var1: 'Можно было-бы куда-нибудь съездить отдохнуть...',
            var2: 'Да, стараюсь посетить новый город или страну при первой же возможности',
            var3: 'Я бы съездил в какую-нибудь прогрессивную страну, где соблюдают права человека и технологии хорошо развиты',
            var4: 'Конечно! Но только по виртуальным мирам...',
            value1: '1',
            value2: '2',
            value3: '3',
            value4: '4',
            path: '5',
            link: 'result',
            next: 'Завершить'
        },
    ]
}