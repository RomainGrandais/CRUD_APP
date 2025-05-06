import Axios from "axios";

// GET : Récupère la liste des utilisateurs
export const loadList = (url, list) => {
  Axios.get(url)
    .then((response) => {
      list(response.data); // pas besoin de (l) =>
    })
    .catch((error) => {
      console.error("Erreur de chargement :", error);
    });
};

// POST / PUT : Ajoute ou modifie un utilisateur
export const SaveUser = (url, user, update) => {
  const payload = {
    name: user.name,
    username: user.username,
    email: user.email,
    phone: user.phone,
  };

  if (user.id === "") {
    Axios.post(url, payload)
      .then(() => loadList(url, update))
      .catch((error) => console.error("Erreur POST :", error));
  } else {
    Axios.put(`${url}/${user.id}`, { id: parseInt(user.id), ...payload })
      .then(() => loadList(url, update))
      .catch((error) => console.error("Erreur PUT :", error));
  }
};

// DELETE : Supprime un utilisateur
export const DeleteUser = (url, id, update) => {
  Axios.delete(`${url}/${id}`)
    .then(() => loadList(url, update))
    .catch((error) => console.error("Erreur DELETE :", error));
};
