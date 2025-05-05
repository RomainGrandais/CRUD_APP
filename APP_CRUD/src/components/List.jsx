import React from "react";
import styled from "styled-components";
import { theme } from "../theme";

export default function List(props) {
  return (
    <ListStyled>
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
      </div>
    </ListStyled>
  );
}

const ListStyled = styled.div`
  border: 1px solid;
  border-color: red;
  #list {
    max-height: 600px;
    width: 100%;
    overflow-y: scroll;
    border-radius: ${theme.borderRadius.extraRound};
    box-shadow: ${theme.shadows.medium};
    background-color: ${theme.colors.white};
  }

  table {
    width: 100%;
    height: 100%;
    border-collapse: collapse;
    border-radius: ${theme.borderRadius.extraRound};
    overflow: hidden;
    font-family: sans-serif;
  }

  thead {
    background-color: ${theme.colors.purple};
    color: ${theme.colors.white};
  }

  th {
    padding: ${theme.spacing.sm};
    text-align: left;
    font-size: ${theme.fonts.SM};
    font-weight: ${theme.weights.semiBold};
  }

  td {
    padding: ${theme.spacing.sm};
    font-size: ${theme.fonts.XS};
    font-weight: ${theme.weights.regular};
    border-bottom: 1px solid #ddd;
    color: #333;
  }

  td:nth-child(even) {
    background-color: #f9f9f9;
  }

  td:hover {
    background-color: #e0e0e0;
    cursor: pointer;
  }

  th:first-child,
  td:first-child {
    padding-left: ${theme.spacing.md};
  }

  th:last-child,
  td:last-child {
    padding-right: ${theme.spacing.md};
  }
`;
