import type { SxProps, Theme } from "@mui/material/styles";

export const loginStyles = {
  loginContainer: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    background: (theme: Theme) => theme.custom.loginBackground,
    position: "relative",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  } as SxProps<Theme>,

  loginForm: {
    backgroundColor: (theme: Theme) => theme.palette.background.paper,
    width: "53rem",
    height: "33rem",
    display: "flex",
    flexDirection: "row",
    padding: 1,
    borderRadius: "24px",
    overFlow: "hidden",

    boxShadow: `0 32px 80px rgba(0, 0, 0, 0.6),
      0 0 0 1px rgba(255, 255, 255, 0.06)`,
    animation: "cardIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",

    "@keyframes cardIn": {
      from: {
        opacity: 0,
        transform: "translateY(40px) scale(0.95)",
      },
      to: {
        opacity: 1,
        transform: "translateY(0) scale(1)",
      },
    },
    position: "relative",
    zIndex: 1,
  } as SxProps<Theme>,

  loginLeft: {
    width: "50%",
    borderRadius: "24px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    backgroundImage: 'url("/src/assets/png/backgroundCard.png")',
    justifyContent: "center",
    alignItems: "center",
  } as SxProps<Theme>,

  svg: {
    width: "320px",
    height: "320px",
    objectFit: "fill",
    borderStyle: "none",

    position: "relative",
    zIndex: 1,
    top: 0,
  } as SxProps<Theme>,

  footer: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
    zIndex: 1,
  } as SxProps<Theme>,

  footerLogo: {
    width: "50px",
  } as SxProps<Theme>,

  footerTitle: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: "11px",
  } as SxProps<Theme>,

  loginRight: {
    width: "50%",
    padding: 4,
    alignItems: "center",
    marginTop: 11,
    gap: 0,
  } as SxProps<Theme>,

  loginRightContent: {
    width: "100%",
    alignItems: "center",
  } as SxProps<Theme>,

  helpdeskLogo: {
    width: "65px",
    objectFit: "fill",
    zIndex: 1,
    top: 0,
    textAlign: "center",
  } as SxProps<Theme>,
};
