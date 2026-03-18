import { Box, Button, Stack, Typography } from "@mui/material";
import { loginStyles } from "./styles/loginStyles";

import helpdeskVector from "../../assets/svg/loginVector.svg";
import helpdeskLogo from "../../assets/png/helpdesk_icon.png";
import misLogo from "../../assets/png/misLogo.png";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useToast } from "../../context/ToastContext";

import type { LoginRequest } from "../../types/login.types";
import TextFieldControlled from "../../components/controlled/TextFieldControlled";
import LoadingOverlay from "../../components/LoadingOverlay";
import { useSignInMutation } from "../../features/api_login/loginApi";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../hooks/useRedux";

const schema: yup.ObjectSchema<LoginRequest> = yup.object({
  username: yup.string().required().label("Username"),
  password: yup.string().required().label("Password"),
});

const Login = () => {
  const { showToast } = useToast();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [login, { isLoading, isSuccess }] = useSignInMutation();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginRequest>({
    resolver: yupResolver(schema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onLoginHandler = async (data: any) => {
    console.log("Data: ", data);

    try {
      await login(data)
        .unwrap()
        .then(() => {
          showToast("Success!", "Login Successfully", "success");
          navigate("/");
        });
    } catch (error) {
      showToast("Error!", "Login Failed", "error");
    }
  };

  return (
    <>
      <LoadingOverlay
        isLoading={isLoading}
        isSuccess={isSuccess}
        logo={helpdeskLogo}
      />

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

          <Stack
            sx={loginStyles.loginRight}
            component="form"
            onSubmit={handleSubmit(onLoginHandler)}
          >
            <Stack sx={loginStyles.loginRightContent}>
              <Box
                component="img"
                src={helpdeskLogo}
                sx={loginStyles.helpdeskLogo}
              />
              <Typography variant="h5" color="text.primary">
                Sign in your Account
              </Typography>

              <Typography fontSize="sm" color="text.secondary">
                Management Information System
              </Typography>

              <Stack mt={2} mb={1} gap={1} sx={{ width: "100%" }}>
                <TextFieldControlled<LoginRequest>
                  name="username"
                  control={control}
                  label="Enter your username"
                  error={!!errors.username}
                  helperText={errors.username?.message}
                />
                <TextFieldControlled<LoginRequest>
                  name="password"
                  control={control}
                  label="Enter your password"
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
              </Stack>

              <Button
                type="submit"
                variant="contained"
                loading={isLoading}
                fullWidth
              >
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
    </>
  );
};

export default Login;
