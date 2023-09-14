import { AuthProvider } from "./context/Auth";
import { ThemeProvider } from "./context/Theme";
import RoutesApp from "./routes/routes";
import "./styles/global.css";

const App = () => (
  <>
    <AuthProvider>
      <ThemeProvider>
        <RoutesApp />
      </ThemeProvider>
    </AuthProvider>
  </>
);

export default App;
