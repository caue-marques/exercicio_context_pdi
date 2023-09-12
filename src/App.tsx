import React from "react";
import "./styles/global.css";
import RoutesApp from "./routes/routes";
import { AuthProvider } from "./context/Auth";
import { ThemeProvider } from "./context/Theme";

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
