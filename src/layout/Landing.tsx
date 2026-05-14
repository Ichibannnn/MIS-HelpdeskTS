// components/Landing.tsx
import { Box, Stack, type Theme } from "@mui/material";
import { Outlet } from "react-router";

import Header from "./Header";
import Sidebar from "./Sidebar";

const Landing = () => {
  return (
    <Stack
      sx={{
        flexDirection: "row",
        height: "100vh",
        backgroundColor: (theme: Theme) => theme.custom.paperColor.secondary,
        overflow: "hidden",
      }}
    >
      <Sidebar />

      {/* Main content column */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
          overflow: "hidden",
        }}
      >
        <Header />

        {/* Page content */}
        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            p: 3,
            // Custom scrollbar
            "&::-webkit-scrollbar": { width: 6 },
            "&::-webkit-scrollbar-track": { backgroundColor: "transparent" },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "rgba(255,255,255,0.1)",
              borderRadius: 3,
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "rgba(255,255,255,0.18)",
            },
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Stack>
  );
};

export default Landing;
