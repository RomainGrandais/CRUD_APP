import Axios from "axios";

// requete get
export const loadList = (url, list) => {
  Axios.get(url).then((response) => {
    list((l) => response.data);
  });
};
