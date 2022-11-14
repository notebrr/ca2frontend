import React from 'react';
import {useNavigate} from "react-router-dom";

function CreateUserButton({loggedIn}) {

    const navigate = useNavigate();

    return (
        <div className="login-container">
            <button onClick={() => navigate("/createUser")} >Create User</button>
        </div>
    );
}

export default CreateUserButton;