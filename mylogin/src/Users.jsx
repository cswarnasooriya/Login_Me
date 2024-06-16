import React, { useEffect, useState } from 'react'
import UserForm from './UserForm'
import UsersTable from './UsersTable';
import { Box } from '@mui/material';
import Axios from "axios";
 


const Users = () => {
  const [users, setUsers] = useState([]);
  const [submited, setSubmited] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [isEdit, setIsEdit] = useState(false);

  useEffect(()=>{
    getUsers();
  }, []);


  //get users to frint end
  const getUsers = () =>{
    Axios.get('http://localhost:3001/api/users')
    .then(response => {
      setUsers(response?.data?.response); //check if data has 
    })
    .catch(error=> {
      console.error("Axios Error : ",error); //handle errors
    });

  }

  //add users using front end side

  const addUser = (data) => {
    setSubmited(true);

    const payload = {
      id:data.id,
      name:data.name,
    }
    Axios.post("http://localhost:3001/api/createuser", payload)
      .then(() => {
        getUsers(); //check if data has succesly added
        setSubmited(false);
        isEdit(false);
      })
      .catch(error=> {
        console.error("Axios Error : ",error); //handle errors
      });
  }

  const updateUser = (data) =>{
    setSubmited(true);

      const payload = {
        id:data.id,
        name:data.name,
      }
      Axios.post("http://localhost:3001/api/updateuser", payload)
        .then(() => {
          getUsers(); //check if data has succesly added
          setSubmited(false);
          isEdit(false);
        })
        .catch(error=> {
          console.error("Axios Error : ",error); //handle errors
        });

  }

  const deleteUser = (data) =>{
    Axios.post("http://localhost:3001/api/deleteuser", data)
        .then(() => {
          getUsers(); //check if data has succesly added
          
        })
        .catch(error=> {
          console.error("Axios Error : ",error); //handle errors
        });
  }







  return (
    <Box sx={{
      width:'calc(100% - 100px)',
      margin:'auto',
      marginTop:'100px'

    }}>
      <UserForm
        addUser={addUser}
        updateUser={updateUser}
        submited={submited}
        data={selectedUser}
        isEdit={isEdit}
      />
      <UsersTable 
        rows={users}
        selectedUser={data =>{
          setSelectedUser(data);
          setIsEdit(true);
        }}
        deleteUser={data => window.confirm("Are You Sure?") && deleteUser(data)}

      />
    </Box>
  )
}

export default Users
