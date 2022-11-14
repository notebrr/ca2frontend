import React, {useState} from 'react';
import facade from "../utils/loginFacade.js";
import "../styles/header.css";

function CreateUser(props) {

    const init = {userName: "", userPass: ""};
    const [loginCredentials, setLoginCredentials] = useState(init);

    const performCreateUser = (evt) => {
        evt.preventDefault();
        createUser(loginCredentials.username, loginCredentials.password);
    }

    const createUser = (user, pass) => {
        facade.createUser(user, pass)
    }

    const onChange = (evt) => {
        setLoginCredentials({...loginCredentials, [evt.target.id]: evt.target.value})
    }

    return (
        <div className="login-container">
            <h1>Fill out the information below to create a new user: </h1>
            <form>
                <br/>
                <br/>
                <input onChange={onChange} type="text" placeholder="Username" id="username"/>{" "}
                <input onChange={onChange} type="password" placeholder="Password" id="password"/>
                <button onClick={performCreateUser} type="submit">Create User</button>
            </form>
        </div>
    )
}

export default CreateUser;