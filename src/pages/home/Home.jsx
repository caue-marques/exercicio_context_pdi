import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAutCtx } from "../../context/Auth";
import "../../components/input/input.css";
import "../signin/signin.css";
import './home.css'
import '../../context/theme.css'
import Button from "../../components/button/Button.tsx";

const Home = ({theme}) => {
  const { signout } = useAutCtx();
  const navigate = useNavigate();

  return (
    <div className={`containerHome ${theme}`}>
      <h2 className="title">Home</h2>
      <div className="title">O tema mudou de cor por causa do contexto!</div>
      <Button text="Sair" onClick={() => [signout(), navigate("/")]}>
      </Button>
    </div>
  );
};

export default Home;
