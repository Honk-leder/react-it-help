import './App.css';
import Header from "./components/Header/Header";
import ContactForm from "./components/ContactForm/ContactForm";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import MessagesPage from "./components/MessagesPage/MessagesPage";


function App(props) {
    return (
        <BrowserRouter>
            <div className={"app"}>
                <Header/>
                <div className={"app-content"}>
                    <Routes>
                        <Route path='/' element={<div>dfdfdffddf</div>}/>
                        <Route path='contact' element={<ContactForm/>}/>
                        <Route path='messages/*' element={<MessagesPage/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;
