import React, {useEffect, useState} from 'react';
import AdminPanelDelete from "../components/AdminPanelDelete.jsx";
import userfacade from "../utils/userFacade.js";
import {useNavigate} from "react-router-dom";


function AdminPanel(props) {

    const [users, setUsers] = useState([]);
    const [hidden,setHidden] = useState(true)
    const init = {id: "",userName: ""};
    const [newUserName, setNewUserName] = useState(init);

    const performUpdateUser = (evt) => {
        evt.preventDefault();
        updateUser(newUserName.userName, newUserName.id);
    }

    const updateUser = (user, id) => {
        userfacade.updateUser(user, id)
    }

    const update = (evt) => {
        setNewUserName({...newUserName, [evt.target.id]: evt.target.value})
        console.log(newUserName)

    }


    const btnText = () => {
        if(hidden){
            return "Update User"
        } else{
            return "Close"
        }
    }


    useEffect(() => {
        const getData = async () => {
            const response = await fetch('http://localhost:8080/api/info/all');
            const data = await response.json();
            setUsers(data);
        }
        getData();
    }, []);



    return (
        <>
            <button className="admin_editUser_Btn" onClick={()=>setHidden(s => !s)}>{btnText()}</button>
            {!hidden ? <form onSubmit={performUpdateUser} >
                <label className="label_admin_editUser">Id:</label>
                <input className="admin_editUser"type="number" id="id" value={newUserName.id} onChange={update}/>
                <label className="label_admin_editUser">Username:</label>
                <input className="admin_editUser" type="text" id="userName" value={newUserName.userName} onChange={update}/>
                <input className="admin_editUser_Btn" type="submit" value="Update"/>
            </form> : null}

            {users.length &&
                <table className="userTable">
                    <thead>
                    <tr>
                        <th>Id</th><th>Username</th><th>Role</th><th></th>
                    </tr>
                    </thead>
                    <tbody>{users.map((user) => {
                        return (<tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.userName}</td>
                                <td>{user.roles.toString()}</td>
                                <td><AdminPanelDelete user={user} users={users} setUsers={setUsers}/></td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            }
        </>
    );
}

export default AdminPanel;