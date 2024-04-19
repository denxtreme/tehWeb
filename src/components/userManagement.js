import React, { useState } from 'react';
import '../Styling/userManagement.css'; // Importă fișierul CSS pentru stilizare


import { MdDeleteOutline } from "react-icons/md";
import { MdCommentsDisabled } from "react-icons/md";


export const UserManagement = () =>  {
  const [users, setUsers] = useState([
    {
      username: "denxtreme",
      clientID: "1",
      usertype: "admin"
    }, 
    {
      username: "denreme",
      clientID: "2",
      usertype: "user"
    }
  ]);

  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    nume: "",
    prenume: "",
    email: "",
    telefon: "",
    adresa: "",
    usertype: "user" // Valoarea implicită pentru usertype
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleAddUser = () => {
    setUsers(prevUsers => [...prevUsers, newUser]);
    setNewUser({
      username: "",
      password: "",
      nume: "",
      prenume: "",
      email: "",
      telefon: "",
      adresa: "",
      usertype: "user"
    });
    console.log("Users:", users);
  };

  const handleDeleteUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  const handleDisableUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers[index].disabled = true;
    setUsers(updatedUsers);
  };

  return (
    <div className='userManag_css'>
      <h1>User Management for Admin - This tab is only available for admins! </h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>User Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.username}</td>
              <td>
                <select
                  name="usertype"
                  value={user.usertype}
                  onChange={(e) => {
                    const updatedUsers = [...users];
                    updatedUsers[index].usertype = e.target.value;
                    setUsers(updatedUsers);
                  }}
                >
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                  <option value="guest">Guest</option>
                </select>
              </td>
              <td>
                <div className='div_btn_table_admin'>
                    <button className='btn_table_admin' onClick={() => handleDeleteUser(index)}><MdDeleteOutline />   </button>
                    <button className = 'btn_table_admin' onClick={() => handleDisableUser(index)}><MdCommentsDisabled/></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="new-user-form">
        <h2>Add New User</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={newUser.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={newUser.password}
          onChange={handleChange}
        />
        {/* Aici poți adăuga și alte câmpuri pentru datele noului utilizator */}
        <button onClick={handleAddUser}>Add User</button>
      </div>
    </div>
  );
};


