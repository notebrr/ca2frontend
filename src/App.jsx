import React, {useState,useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Header from "./components/Header.jsx";
import CreateUser from "./pages/CreateUser.jsx";
import facade from "./utils/loginFacade.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';


function App(props) {

    const [loggedIn, setLoggedIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState('All is good ... so far');


    useEffect(() => {
        facade.verifyToken().then(res=> {
            if(res == facade.getUserName()){
                setLoggedIn(true);
            }
        })
    }, []);



    return (
       <>
            <Header setLoggedIn={setLoggedIn} loggedIn={loggedIn} facade={facade}/>
            <Routes>
                <Route path="/" element={<Home facade={facade}/>}/>
                <Route path="/createUser" element={<CreateUser/>}/>
                <Route path="*" element={<h1>Page Not Found !!!!</h1>}/>
            </Routes>
        </>
    );
}

export default App;