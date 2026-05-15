import type { SxProps, Theme } from "@mui/material/styles";

export const sbStyles = {
  // Sidebar Header
  headerContainer: {
    px: 2,
    py: 2.5,
    display: "flex",
    alignItems: "center",
    gap: 1.5,
    minHeight: 64,
  } as SxProps<Theme>,

  logoContainer: {
    width: 38,
    height: 38,
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 800,
    fontSize: 18,
    flexShrink: 0,
    letterSpacing: "-0.5px",
  } as SxProps<Theme>,

  logoTextContainer: {
    transition: "all 0.25s ease",
    whiteSpace: "nowrap",
    overflow: "hidden",
  } as SxProps<Theme>,

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

  sidebarDivider: {
    bgcolor: "rgba(255,255,255,0.07)",
    mx: 1.5,
  } as SxProps<Theme>,

  // Sidebar Nav Sections
  navSectionContainer: {
    flex: 1,
    overflowY: "auto",
    overflowX: "hidden",
    py: 1,
  } as SxProps<Theme>,

  navSectionLabelContainer: {
    px: 2,
    pt: 2,
    pb: 0.5,
    overflow: "hidden",
    transition: "opacity 0.2s, height 0.3s",
  } as SxProps<Theme>,

  navSectionText: {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: "1.8px",
    textTransform: "uppercase",
    color: "rgba(148,163,184,0.6)",
  } as SxProps<Theme>,
};
