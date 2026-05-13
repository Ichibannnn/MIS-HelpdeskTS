import type { SxProps, Theme } from "@mui/material/styles";

export const sbStyles = {
  misText: {
    fontSize: ".7rem",
    fontWeight: "700",
    color: "text.primary",
    lineHeight: "1.2",
    letterSpacing: 1,
  } as SxProps<Theme>,

  heldeskText: {
    fontSize: ".7rem",
    fontWeight: "700",
    color: "text.primary",
    lineHeight: "1.2",
    letterSpacing: 1,
  } as SxProps<Theme>,

  heldeskProductionText: {
    fontSize: 10,
    color: "text.secondary",
    letterSpacing: "1.2px",
    textTransform: "uppercase",
    fontWeight: 600,
  } as SxProps<Theme>,
};
