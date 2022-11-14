import React from 'react';
import facade from "../utils/loginFacade.js";
import "../styles/header.css";
import {useNavigate} from "react-router-dom";

function ShowUserName({setLoggedIn}) {

    const navigate = useNavigate();

    return (
        <div className="show-username-container">
            <button onClick={() => navigate("/")}>{facade.getUserName()}</button>
        </div>
    );
}

export default ShowUserName;