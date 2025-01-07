import { Box, Stack, Typography } from "@mui/material";
import logo from "@/shared/assets/images/logotype.png";
import classes from "./Header.module.scss";
import { BreadCrumbs } from "@/widgets/BreadCrumbs";
const Header = () => {
  return (
    <Stack>
      <Stack
        justifyContent="space-between"
        flexDirection="row"
        className={classes.header_container}
      >
        <Box component="img" src={logo} sx={{ width: 101, height: 41 }} />
        <Stack flexDirection="row" gap={6}>
          <Typography>+7 343 290 84 76</Typography>
          <Typography>info@66bit.ru</Typography>
        </Stack>
      </Stack>
      <BreadCrumbs />
    </Stack>
  );
};

export default Header;
