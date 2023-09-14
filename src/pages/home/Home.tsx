import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import "../../components/input/input.css";
import { useAutCtx } from "../../context/Auth";
import { useThemeCtx } from "../../context/Theme";
import '../../context/theme.css';
import "../signin/signin.css";
import './home.css';

const Home = () => {
  const { signout } = useAutCtx();
  const navigate = useNavigate();
  const { theme } = useThemeCtx();

  return (
    <div className={`containerHome ${theme}`}>
      <h2 className="title">Home</h2>
      <div className="title">O tema mudou de cor por causa do contexto!</div>
      <Button text="Sair" onClick={() => [signout(), navigate("/")]} />
    </div>
  );
};

export default Home;
