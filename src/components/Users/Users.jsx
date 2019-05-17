import React from 'react';
import UserList from './UserList';

const Users = () => {
  return (
    <div>
      <h3>Usuários</h3>
      <button className="btn btn-success">Novo</button>
      <UserList />
    </div>
  );
};

export default Users;