import { createRoot } from "react-dom/client";
import App from "./App";

//! para possível retorno de null
const root = createRoot(document.querySelector("#root")!);

root.render(<App />);