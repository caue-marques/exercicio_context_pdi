import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import '../../components/button/button.css';
import '../../components/input/input.css';
import { useAutCtx } from "../../context/Auth";
import { useThemeCtx } from "../../context/Theme";
import './signin.css';

const Signin = () => {
  const { signin } = useAutCtx();
  const navigate = useNavigate();
  const {theme} = useThemeCtx();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setError("Preencha todos os campos");
      return;
    }

    const userRequest = {email, password}

    const res = signin(userRequest);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
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
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => [setPassword(e.target.value), setError("")]}
        />
        <div className="labelError">{error}</div>

        <Button text="Entrar" onClick={handleLogin}></Button>

        <div className="labelSignup">
          Não tem uma conta?
          <div className="strong">
            <Link to="/signup">&nbsp;Registre-se</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
