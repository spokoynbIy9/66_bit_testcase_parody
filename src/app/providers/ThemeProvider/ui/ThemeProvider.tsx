import { theme } from "@/shared/theme";
import { ThemeProvider as Theme } from "@mui/material";
import { FC, ReactNode } from "react";

type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => (
  <Theme theme={theme}>{children}</Theme>
);

export default ThemeProvider;
