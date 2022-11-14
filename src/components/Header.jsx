import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import Login from "./Login.jsx";
import LoggedIn from "./LoggedIn.jsx";
import ShowUserName from "./ShowUserName.jsx";
import "../styles/header.css";
import {Button} from "react-bootstrap";
import CreateUserButton from "./CreateUserButton.jsx";


function Header({setErrorMessage, loggedIn, setLoggedIn, facade}) {


    return (
        <nav className="topnav">
            <NavLink className="active" to="/"><i className="fa fa-fw fa-home"></i> Home</NavLink>


            {!loggedIn ? (<CreateUserButton/>) :
                (<>
                </>)}

            {!loggedIn ? (<></>) :
                (<div><ShowUserName setLoggedIn={setLoggedIn}/>
                </div>)}


            {!loggedIn ? (<Login setLoggedIn={setLoggedIn} setErrorMsg={setErrorMessage}  />) :
                (<div>
                    <LoggedIn setLoggedIn={setLoggedIn}/>
                </div>)}

        </nav>
    );
}

export default Header;