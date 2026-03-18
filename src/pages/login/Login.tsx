import { Box, Button, Stack, Typography } from "@mui/material";
import { loginStyles } from "./styles/loginStyles";

import helpdeskVector from "../../assets/svg/loginVector.svg";
import helpdeskLogo from "../../assets/png/helpdesk_icon.png";
import misLogo from "../../assets/png/misLogo.png";

import TextFieldControlled from "../../components/controlled/TextFieldControlled";
import type { LoginRequest } from "../../types/login.types";
import { useForm } from "react-hook-form";

const Login = () => {
  const { control } = useForm<LoginRequest>();

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

        <Stack sx={loginStyles.loginRight}>
          <Stack sx={loginStyles.loginRightContent}>
            <Box component="img" src={helpdeskLogo} sx={loginStyles.helpdeskLogo} />
            <Typography variant="h5" color="text.primary">
              Sign in your Account
            </Typography>

            <Typography fontSize="sm" color="text.secondary">
              Management Information System
            </Typography>

            <Stack mt={5} mb={2} gap={1} sx={{ width: "100%" }}>
              <TextFieldControlled<LoginRequest> name="username" control={control} label="Username" />
              <TextFieldControlled<LoginRequest> name="password" control={control} label="Password" />
            </Stack>

            <Button variant="contained" fullWidth>
              Login
            </Button>
          </Stack>
        </Stack>
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
