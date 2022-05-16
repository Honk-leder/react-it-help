import './App.css';
import Header from "./components/Header/Header";
import ContactForm from "./components/ContactForm/ContactForm";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import MessagesPage from "./components/MessagesPage/MessagesPage";
import {useSelector} from "react-redux";
import MainPage from "./components/MainPage/MainPage";
import React from "react";


function App(props) {
    const messages = useSelector(state => state);
       return (
        <BrowserRouter>
            <div className={"app"}>
                <Header/>
                <div className={"app-content"}>
                    <Routes>
                        <Route path='/*' element={<MainPage/>}/>
                        <Route path='contact' element={<ContactForm/>}/>
                        <Route path='messages/*' element={<MessagesPage messages={messages}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;
