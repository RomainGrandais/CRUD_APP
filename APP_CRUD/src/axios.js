import Axios from "axios";

// requete get
export const loadList = (url, list) => {
  Axios.get(url).then((response) => {
    list((l) => response.data);
  });
};

export const SaveUser = (url, user, update) => {
  if (user.id == "") {
    Axios.post(url, {
      Name: user.name,
      Username: user.username,
      Email: user.email,
      Phone: user.phone,
    }).then((response) => {
      console.log(response);
      loadList(url, update);
    });
  } else {
    Axios.put(url + `/${user.id}`, {
      ID: parseInt(user.id),
      Name: user.name,
      Username: user.username,
      Email: user.email,
      Phone: user.phone,
    }).then((response) => {
      console.log(response);
      loadList(url, update);
    });
  }
};

export const DeleteUser = (url, id, update) => {
  Axios.delete(url + `/${id}`).then((response) => {
    console.log(response);
    loadList(url, update);
  });
};
