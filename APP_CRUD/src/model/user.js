// modèle class user

export class User {
  constructor(name = "", username = "", email = "", phone = "", id = "") {
    this.name = name;
    this.username = username;
    this.email = email;
    this.phone = phone;
    this.id = id;
  }
}
