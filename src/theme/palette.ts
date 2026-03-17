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
            default: "#F7F9FB",
            paper: "#FFFFFF",
          },
        }
      : {
          primary: { main: "#9e77ed" },
          secondary: { main: "#3f305f" },
          success: { main: "#22c55e" },
          warning: { main: "#f59e0b" },
          error: { main: "#ef4444" },
          background: {
            default: "#111827",
            paper: "#1F2937",
          },
        }),
  },

  custom: {
    loginBackground:
      mode === "light" ? "linear-gradient(227deg, rgba(83, 59, 140, 1) 21%, rgba(242, 242, 242, 1) 81%)" : "linear-gradient(227deg, rgba(83, 59, 140, 1) 21%, #0e1320 81%)",
  },
});

export default palette;
