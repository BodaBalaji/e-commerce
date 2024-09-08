import React from 'react'

const UserTableRow = ({user}) => {
  return (
    <tr>
        <td>{user.id}</td>
        <td>{user.userName}</td>
        <td>{user.email}</td>
        <td>{user.mobileNumber}</td>
    </tr>
  )
}

export default UserTableRow