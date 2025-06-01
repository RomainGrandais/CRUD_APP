import React, { useState, useEffect } from "react";
import { User } from "./model/user";
import { loadList, SaveUser, DeleteUser } from "./axios";
import List from "./components/List";
import SearchBar from "./components/SearchBar";
import CrudForm from "./components/CrudForm";
import styled from "styled-components";

function App() {
  const [user, setUser] = useState(new User());
  const [list, setList] = useState([]);
  const url = "http://localhost:5277/api/Users";

  useEffect(() => {
    const fetchData = async () => {
      await loadList(url, setList);
    };
    fetchData();
  }, []);

  function selectUser(id) {
    setUser(list.find((u) => u.id === id));
  }

  function saveUser(data) {
    SaveUser(url, data, setList);
  }

  function deleteUser(user) {
    DeleteUser(url, user.id, setList);
  }

  function search(name, group) {
    let filter;
    if (name === "") loadList(url, setList);
    else {
      if (group === "id") filter = list.filter((u) => u.id == parseInt(name));
      else if (group === "name") filter = list.filter((u) => u.name === name);
      else if (group === "username")
        filter = list.filter((u) => u.username === name);
      else if (group === "email") filter = list.filter((u) => u.email === name);
      else if (group === "phone") filter = list.filter((u) => u.phone === name);
      setList(filter);
    }
  }

  return (
    <AppStyled>
      <div className="container-fluid pl-5 pr-8">
        <div className="row">
          <div className="col-md-8">
            <SearchBar search={search} />
            <List list={list} user={selectUser} />
          </div>
          <div className="col-md-4">
            <CrudForm user={user} saveUser={saveUser} deleteUser={deleteUser} />
          </div>
        </div>
      </div>
    </AppStyled>
  );
}

export default App;

const AppStyled = styled.div`
  width: 100%;
  .row {
    display: flex;
    flex-direction: row;
  }

  .col-md-8 {
    width: 70%;
  }
  .col-md-4 {
    width: 30%;
  }
`;
