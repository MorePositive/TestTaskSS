import React from 'react';

const UserListItem = ({userName, surName, email, phone, role}) => {

  return (

    <tr>
      <td>{userName} {surName}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{role}</td>
    </tr>
    )
};

export default UserListItem;