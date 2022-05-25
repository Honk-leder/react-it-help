import {initializeApp} from 'firebase/app';
import {getDatabase} from 'firebase/database';
import {getAuth} from 'firebase/auth'



const firebaseConfig = {
    apiKey: "AIzaSyA_ffzI19loWTemmDCGuLSSsZuX9DgUtkw",
    authDomain: "react-it-help-project-5d840.firebaseapp.com",
    databaseURL: "https://react-it-help-project-5d840-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "react-it-help-project-5d840",
    storageBucket: "react-it-help-project-5d840.appspot.com",
    messagingSenderId: "59156415703",
    appId: "1:59156415703:web:463ab5913cea69a63bdc92"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


export {db};





