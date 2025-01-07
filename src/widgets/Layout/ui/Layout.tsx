import { Header } from "@/widgets/Header";
import { Box } from "@mui/material";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box className="page-wrapper">
      <Header />
      <Box component="main">{children}</Box>
    </Box>
  );
};

export default Layout;
