import React, { useEffect, useRef } from "react";
import FontAwesome from "react-fontawesome";
import { User } from "../model/user";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { theme } from "../theme";

export default function CrudForm(props) {
  const { register, handleSubmit, reset } = useForm();
  const eraseButton = useRef(null);
  const submitButton = useRef(null);

  const user = new User(
    props.user.name,
    props.user.username,
    props.user.email,
    props.user.phone,
    props.user.id
  );

  useEffect(() => {
    reset(user);
    if (user.id !== "") {
      submitButton.current.innerText = "Modifier";
      eraseButton.current.disabled = false;
    } else {
      eraseButton.current.disabled = true;
    }
  }, [props.user]);

  function pencil_click() {
    reset({ id: "", name: "", username: "", email: "", phone: "" });
    submitButton.current.innerText = "Ajouter";
    eraseButton.current.disabled = true;
  }

  function erase_click() {
    props.deleteUser(user);
    pencil_click();
  }

  function onSubmit(data) {
    props.saveUser(data);
    pencil_click();
  }

  return (
    <CrudFormStyled>
      <div className="form-container">
        <div className="button">
          <button onClick={pencil_click}>
            <FontAwesome name="pencil" size="2x" />
          </button>
          <button onClick={erase_click} ref={eraseButton}>
            <FontAwesome name="trash" size="2x" />
          </button>
        </div>
        <form id="form-board" onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" {...register("id")} />
          <label htmlFor="name">Nom</label>
          <input id="name" {...register("name")} />
          <label htmlFor="username">Nom d'utilisateur</label>
          <input id="username" {...register("username")} />
          <label htmlFor="email">Email</label>
          <input id="email" {...register("email")} />
          <label htmlFor="phone">Téléphone</label>
          <input id="phone" {...register("phone")} />
          <button ref={submitButton} type="submit" id="submit">
            Ajouter
          </button>
        </form>
      </div>
    </CrudFormStyled>
  );
}

const CrudFormStyled = styled.div`
  background: rgba(53, 50, 71, 0.9); /* violet foncé transparent */
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: ${theme.borderRadius.extraRound};
  padding: ${theme.spacing.xl};
  width: 60%;

  margin: 0 auto;
  box-shadow: ${theme.shadows.medium};
  backdrop-filter: blur(10px);
  color: ${theme.colors.white};

  label {
    display: block;
    margin-top: ${theme.spacing.md};
    font-size: ${theme.fonts.SM};
    font-weight: ${theme.weights.medium};
    color: ${theme.colors.white};
  }

  input,
  select {
    width: 100%;
    padding: ${theme.spacing.sm};
    margin-top: ${theme.spacing.xs};
    border: none;
    border-bottom: 1px solid #ccc;
    background: transparent;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.P1};
    outline: none;
  }

  input::placeholder {
    color: #bbb;
  }

  .button {
    display: flex;
    justify-content: center;
    gap: ${theme.spacing.sm};
    margin-top: ${theme.spacing.lg};
  }

  button[type="submit"] {
    background-color: #e91e63;
    color: white;
    border: none;
    padding: ${theme.spacing.sm} ${theme.spacing.lg};
    margin-top: ${theme.spacing.sm};
    border-radius: 30px;
    font-size: ${theme.fonts.P1};
    font-weight: ${theme.weights.semiBold};
    cursor: pointer;
    transition: background 0.3s;
  }

  button[type="submit"]:hover {
    background-color: #c2185b;
  }

  .icon-button {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 20px;
  }

  .icon-button:hover {
    opacity: 0.7;
  }
`;
