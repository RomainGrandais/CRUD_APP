import React, { useState, useEffect } from "react";
import { User } from "./model/user";
import { loadList } from "./axios";
import List from "./components/List";

function App() {
  const [user, setUser] = useState(new User());
  const [list, setList] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect((async) => {
    loadList(url, setList);
  }, []);

  function selectUser(id) {
    setUser(list.find((u) => u.id == id));
  }
  return (
    <div className="container-fluid pl-5 pr-8">
      <div className="row">
        <div className="col-md-8">
          <List list={list} user={selectUser} />
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}

export default App;
