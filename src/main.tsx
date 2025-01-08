import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "@/app/styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import ThemeProvider from "./app/providers/ThemeProvider/ui/ThemeProvider.tsx";
import { StoreProvider } from "./app/providers/StoreProvider/index.ts";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StoreProvider>
      <ThemeProvider>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </StoreProvider>
  </BrowserRouter>
);
