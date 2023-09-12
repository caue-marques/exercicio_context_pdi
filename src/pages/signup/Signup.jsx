import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAutCtx } from "../../context/Auth";
import "../../components/button/button.css";
import "../../components/input/input.css";
import "../signin/signin.css";
import Button from "../../components/button/Button.tsx";

const Signup = ({theme}) => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAutCtx();

  const handleSignup = () => {
    if (!email || !emailConf || !password) {
      setError("Preencha todos os campos");
      return;
    } 
    
    if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    const res = signup(email, password);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/");
  };


  return (
    <div className={`container ${theme}`}>
      <div className="label">Sistema de Login</div>
      <div className="content">
        <input
          type="email"
          placeholder="Digite seu Email"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />

        <input
          type="email"
          placeholder="Confirme seu Email"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />

        <input
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => [setPassword(e.target.value), setError("")]}
        />
        <div className="labelError">{error}</div>

        <Button text="Entrar" onClick={handleSignup}></Button>

        <div className="labelSignup">
          Já tem uma conta?
          <div className="strong">
            <Link to="/signin">&nbsp;Entre</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
