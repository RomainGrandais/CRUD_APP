import React, { useState, useRef } from "react";
import styled from "styled-components";
import { theme } from "../theme";
import FontAwesome from "react-fontawesome";

export default function SearchBar(props) {
  const [searchValue, setSearchValue] = useState("");
  const group = useRef(null);

  function handleChange(e) {
    setSearchValue(e.target.value);
  }
  function handleSubmit(e) {
    props.search(searchValue, group.current.value);
  }
  return (
    <SearchBarStyled>
      <div className="searchBar-container">
        <div className="searchBar">
          <input
            className="searchBar-input"
            id="search"
            name="search"
            placeholder="search"
            value={searchValue}
            onChange={handleChange}
          />
          <button onClick={handleSubmit} className="searchBar-submit">
            <FontAwesome className="icon" name="search" />
          </button>
        </div>
        <select id="groupe" ref={group}>
          <option value="id">Id</option>
          <option value="name">Name</option>
          <option value="username">Username</option>
          <option value="email">Email</option>
          <option value="phone">Phone</option>
        </select>
      </div>
    </SearchBarStyled>
  );
}

const SearchBarStyled = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.sm};
  width: 50%;

  .searchBar-container {
    display: flex;
    flex-direction: row;
  }
  .searchBar {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: white;
    border-radius: 50px;
    padding: ${theme.spacing.xs};
    box-shadow: ${theme.shadows.medium};
    flex-grow: 1;
    max-width: 600px;
  }

  .searchBar-input {
    border: none;
    outline: none;
    flex: 1;
    padding: ${theme.spacing.sm};
    font-size: ${theme.fonts.P1};
    border-radius: 50px;
  }

  .searchBar-submit {
    background-color: ${theme.colors.purple};
    border: none;
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .searchBar-submit:hover {
    background-color: #2a2638;
  }

  select {
    border: none;
    border-radius: 20px;
    padding: ${theme.spacing.xs} ${theme.spacing.sm};
    font-size: ${theme.fonts.SM};
    background-color: ${theme.colors.white};
    box-shadow: ${theme.shadows.subtle};
    outline: none;
    cursor: pointer;
  }
`;
