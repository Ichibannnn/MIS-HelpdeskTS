import { Backdrop, Box, CircularProgress } from "@mui/material";

interface LoadingOverlayProps {
  isLoading: boolean;
  isSuccess?: boolean; // ✅ optional
  logo: string;
}

const LoadingOverlay = ({ isLoading, isSuccess, logo }: LoadingOverlayProps) => (
  <Backdrop
    open={isLoading || !!isSuccess} // ✅ show on either state
    sx={{
      zIndex: (theme) => theme.zIndex.drawer + 1,
      backgroundColor: "background.default",
    }}
  >
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress
        size={80}
        thickness={2}
        sx={{
          color: isSuccess ? "success.main" : "primary.main", // ✅ green on success
        }}
      />
      <Box
        component="img"
        src={logo}
        alt="Loading..."
        sx={{
          position: "absolute",
          width: 45,
          height: 45,
          objectFit: "contain",
          // animation: "pulse 1.5s ease-in-out infinite",
          // "@keyframes pulse": {
          //   "0%": { opacity: 1, transform: "scale(1)" },
          //   "50%": { opacity: 0.6, transform: "scale(0.85)" },
          //   "100%": { opacity: 1, transform: "scale(1)" },
          // },
        }}
      />
    </Box>
  </Backdrop>
);

export default LoadingOverlay;
