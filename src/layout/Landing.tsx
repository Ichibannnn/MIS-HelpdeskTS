import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { Button, IconButton } from "@mui/material";
import { signOut } from "../features/auth/authSlice";
import { clearUserDetails } from "../features/user/userSlice";
import { useThemeMode } from "../context/ThemeContext";
import { DarkMode, LightMode } from "@mui/icons-material";

const Landing = () => {
  const userDetails = useAppSelector((state) => state);
  const { mode, toggleTheme } = useThemeMode();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  console.log("UserDetails: ", userDetails);

  const onLogoutHandler = () => {
    dispatch(signOut());
    dispatch(clearUserDetails());

    navigate("/login");
  };

  return (
    <>
      <Button variant="contained" onClick={onLogoutHandler}>
        Logout
      </Button>

      <IconButton color="inherit" onClick={toggleTheme}>
        {mode === "light" ? <DarkMode /> : <LightMode />}
      </IconButton>
    </>
  );
};

export default Landing;
