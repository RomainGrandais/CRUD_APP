# CRUD App - React + ASP.NET Core + MySQL

Ce projet est une application fullstack CRUD permettant de gérer une liste d’utilisateurs, avec une interface frontend en **React**, une API backend en **ASP.NET Core**, et une base de données **MySQL**.

## 🧩 Technologies utilisées

- ⚛️ React (Vite + Axios + styled-components)
- 🧪 ASP.NET Core Web API (.NET 8)
- 🐬 MySQL avec Pomelo.EntityFrameworkCore.MySql
- 🧭 Swagger UI pour la documentation de l’API
- 🔐 CORS activé pour le développement local

## 📦 Fonctionnalités

- 📝 Ajouter, modifier, supprimer un utilisateur
- 🔍 Recherche par champ (id, nom, email, etc.)
- 🎨 Interface responsive avec design système

## 🚀 Comment lancer le projet

### 1. Prérequis

- [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download)
- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/) + [phpMyAdmin (facultatif)](https://www.phpmyadmin.net/)

### 2. Lancer l'API

cd Api_CrudApp
dotnet restore
dotnet build
dotnet run

### 2. Lancer le frontend

cd Api_CrudApp
dotnet restore
dotnet build
dotnet run

📄 API Documentation

Swagger est disponible à l’adresse : http://localhost:5277/swagger
