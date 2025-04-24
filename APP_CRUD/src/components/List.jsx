import React from "react";

export default function List(props) {
  return;
  <div id="list">
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>UserName</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {props.list.map((user) => {
          return (
            <tr key={user.id} onClick={(e) => props.user(user.id)}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>;
}
