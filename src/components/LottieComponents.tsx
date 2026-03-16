import { Box, Button, styled } from "@mui/material";
import { useNavigate } from "react-router";

import Lottie from "lottie-react";
import { ChevronLeft } from "@mui/icons-material";

import pageNotFound from "../assets/lottie-files/page-not-found.json";

const StyleBox = styled(Box)(() => ({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 9999,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));

interface Props {
  text?: string;
}

export const PageNotFound: React.FC<Props> = ({ text }) => {
  const navigate = useNavigate();

  return (
    <StyleBox sx={{ background: "#111927" }}>
      <Lottie
        animationData={pageNotFound}
        style={{
          width: "100%",
          maxWidth: 600,
        }}
      />

      {text && <Box sx={{ color: "#fff", mb: 2, fontSize: 18 }}>{text}</Box>}

      <Button
        variant="outlined"
        size="large"
        startIcon={<ChevronLeft />}
        onClick={() => navigate(-1)}
        disableElevation
      >
        Go Back
      </Button>
    </StyleBox>
  );
};
