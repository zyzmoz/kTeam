import React from 'react';
import Octicon, { Pencil, Trashcan } from '@githubprimer/octicons-react';
import './Users.css';

const UserItem = ({ user, editUser }) => {
  console.log(user);
  return (
    <tr className="row">
      <th className="col-1"></th>
      <th className="col-4">{user.name}</th>
      <th className="col-2">{user.phone}</th>
      <th className="col-3">{user.email}</th>
      <th className="col-2 actions">
        <button className="btn btn-primary small ">
          <Octicon icon={Pencil} />
        </button>
        <button className="btn btn-danger small">
          <Octicon icon={Trashcan} />
        </button>
      </th>
    </tr>
  );
};

export default UserItem;