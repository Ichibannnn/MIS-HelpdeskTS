import type { PaletteMode, ThemeOptions } from "@mui/material/styles";

const palette = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: { main: "#9e77ed" },
          secondary: { main: "#3f305f" },
          success: { main: "#22c55e" },
          warning: { main: "#f59e0b" },
          error: { main: "#ef4444" },
          background: {
            default: "#FFFFFF",
            paper: "#FFFFFF",
          },
          text: {
            primary: "#111827",
            secondary: "#0c0d0d",
          },
        }
      : {
          primary: { main: "#9e77ed" },
          secondary: { main: "#3f305f" },
          success: { main: "#22c55e" },
          warning: { main: "#f59e0b" },
          error: { main: "#ef4444" },
          background: {
            default: "#0E1320",
            paper: "#1C2536",
          },
          text: {
            primary: "#EDF2F7",
            secondary: "#A0AEC0",
          },
        }),
  },

  custom: {
    loginBackground:
      mode === "light" ? "linear-gradient(227deg, rgba(83, 59, 140, 1) 21%, rgba(242, 242, 242, 1) 81%)" : "linear-gradient(227deg, rgba(83, 59, 140, 1) 21%, #0e1320 81%)",
  },
});

export default palette;
