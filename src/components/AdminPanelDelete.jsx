import React from 'react';

function AdminPanelDelete({user,users,setUsers}) {

    const deleteUser = async (id) => {
        const res = await fetch(`http://localhost:8080/api/info/user/${id}`, {
            method: 'DELETE',
        })
        res.status === 200
            ? setUsers(users.filter((user) => user.id !== id))
            : alert('Error Deleting This User')
    }

    return (
        <div>
            <input className="deleteImage" type="image" src="src/images/delete-512.png"
                   onClick={(e) => deleteUser(user.id, e)}>
            </input>
        </div>
    );
}


export default AdminPanelDelete;