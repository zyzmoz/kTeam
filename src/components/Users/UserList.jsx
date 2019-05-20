import React from 'react';
import UserItem from './UserItem';

const UserList = (props) => {
  const { users } = props;
  console.log(users);
  return (
    <table className="table">
      <thead>
        <tr className="row">
          <th className="col-1">#</th>
          <th className="col-4">Nome</th>
          <th className="col-2">Telefone</th>
          <th className="col-3">Email</th>
          <th className="col-2">Ações</th>
        </tr>
      </thead>
      <tbody>
        {users && users.map((user, i) =>  <UserItem key={i} user={user}/>)} 
      </tbody>
    </table>

  );
};

export default UserList;