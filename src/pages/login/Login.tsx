import { Box, Stack, Typography } from "@mui/material";
import { loginStyles } from "./styles/loginStyles";

import helpdeskVector from "../../assets/svg/loginVector.svg";
import misLogo from "../../assets/png/misLogo.png";

const Login = () => {
  return (
    <Box sx={loginStyles.loginContainer}>
      <Stack sx={loginStyles.loginForm}>
        <Stack sx={loginStyles.loginLeft}>
          <Stack>
            <Typography color="white" textAlign="center" variant="h3">
              WELCOME!
            </Typography>
            <Typography color="white" fontSize="sm" textAlign="center">
              MIS-Helpdesk
            </Typography>
            <Box component="img" src={helpdeskVector} sx={loginStyles.svg} />
          </Stack>
        </Stack>

        <Stack sx={loginStyles.loginRight}></Stack>
      </Stack>

      <Stack sx={loginStyles.footer}>
        <Box component="img" src={misLogo} sx={loginStyles.footerLogo} />
        <Typography sx={loginStyles.footerTitle}>
          &#169; 2026 Powered by <br /> Management Information System
        </Typography>
      </Stack>
    </Box>
  );
};

export default Login;
