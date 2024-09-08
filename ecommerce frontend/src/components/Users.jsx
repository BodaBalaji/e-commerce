import React, { useEffect } from 'react'
import { useState } from 'react'
import UserService from '../services/UserService';
import UserTableRow from '../uicomponent/UserTableRow';

const Users = () => {

    const [loading, setLoading] = useState(false);
    const [userList, setUserList] = useState([]);

    useEffect(() => {
      const fetchUser = async ()=>{
        setLoading(true);
        try {
            const response = await UserService.getUsers();
            setUserList(response.data);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
      }

      fetchUser();
    }, [])
    
  return (
    <table>
        <thead>
            <tr>
                <th>User ID</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Mobile Number</th>
            </tr>
        </thead>
          {!loading && (
            <>
            {userList.map((user) =>(
                <UserTableRow user={user} key={user.id}/>
            ))}
            </>
          )}
        <tbody>

        </tbody>
    </table>
  )
}

export default Users