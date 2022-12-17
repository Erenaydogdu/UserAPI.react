import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import SingleUser from './SingleUser';
import axios from "axios"

function UserList() {
    const [users,setUsers] = useState([]);

    const fetchUsers = async() => {
       const response = await axios.get('https://randomuser.me/api/?results=5')
       setUsers(response.data.results)
    }

    useEffect(()=>{
        fetchUsers()
    },[])

  return (
    <div className='user-list'>
      <ul>
        {users.map((user,index) => (
            <li>
                <SingleUser key={index} user={user}/>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList
