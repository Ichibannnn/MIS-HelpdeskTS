import type { SxProps, Theme } from "@mui/material/styles";

export const loginStyles = {
  loginContainer: {
    height: "100vh",
    display: "flex",
    backgroundColor: "linear-gradient(227deg, rgba(83, 59, 140, 1) 21%, rgba(242, 242, 242, 1) 81%)",
    position: "relative",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  } as SxProps<Theme>,

  //   leftContainer: {
  //     display: { xs: "none", md: "flex" },
  //     width: "100%",
  //     position: "relative",
  //     overflow: "hidden",
  //   } as SxProps<Theme>,

  //   cityBackground: {
  //     position: "absolute",
  //     top: 0,
  //     left: 0,
  //     width: "100%",
  //     height: "100%",
  //     backgroundSize: "cover",
  //     backgroundRepeat: "no-repeat",
  //     backgroundPosition: "bottom",
  //   } as SxProps<Theme>,

  //   overlay: {
  //     position: "absolute",
  //     top: 0,
  //     left: 0,
  //     width: "100%",
  //     height: "100%",
  //     background: "linear-gradient(135deg, #4a6cf7 0%, #667eea 50%, #764ba2 100%)",
  //     opacity: 0.8,
  //   } as SxProps<Theme>,

  //   curvedElement: {
  //     position: "absolute",
  //     top: 0,
  //     right: 0,
  //     width: "200px",
  //     height: "100%",
  //     background: "linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
  //     borderRadius: "50% 0 0 50%",
  //     transform: "translateX(100px)",
  //   } as SxProps<Theme>,

  //   brandingContent: {
  //     position: "relative",
  //     zIndex: 10,
  //     display: "flex",
  //     flexDirection: "column",
  //     justifyContent: "center",
  //     alignItems: "flex-start",
  //     height: "100%",
  //     width: "58%",
  //   } as SxProps<Theme>,

  //   logoContainer: {
  //     display: "flex",
  //     alignItems: "center",
  //     width: "100%",
  //   } as SxProps<Theme>,

  //   logoImage: {
  //     width: "100%",
  //     height: "auto",
  //   } as SxProps<Theme>,

  //   logo: {
  //     width: "80px",
  //     height: "80px",
  //     backgroundColor: "rgba(255,255,255,0.2)",
  //     borderRadius: "16px",
  //     display: "flex",
  //     alignItems: "center",
  //     justifyContent: "center",
  //     marginRight: "20px",
  //     border: "2px solid rgba(255,255,255,0.3)",
  //     backdropFilter: "blur(10px)",
  //   } as SxProps<Theme>,

  //   companyName: {
  //     color: "#ffffff",
  //     fontWeight: 700,
  //     fontSize: "3.5rem",
  //     letterSpacing: "2px",
  //     textShadow: "0 4px 8px rgba(0,0,0,0.3)",
  //   } as SxProps<Theme>,

  //   companySubtitle: {
  //     color: "rgba(255,255,255,0.9)",
  //     fontWeight: 300,
  //     fontSize: "1.4rem",
  //     marginBottom: "48px",
  //     letterSpacing: "1px",
  //   } as SxProps<Theme>,

  //   featureHighlights: {
  //     display: "flex",
  //     flexDirection: "column",
  //     gap: "24px",
  //   } as SxProps<Theme>,

  //   featureItem: {
  //     display: "flex",
  //     alignItems: "center",
  //     gap: "16px",
  //     padding: "16px 20px",
  //     backgroundColor: "rgba(255,255,255,0.1)",
  //     borderRadius: "12px",
  //     border: "1px solid rgba(255,255,255,0.2)",
  //     backdropFilter: "blur(10px)",
  //     transition: "all 0.3s ease",
  //     "&:hover": {
  //       backgroundColor: "rgba(255,255,255,0.15)",
  //       transform: "translateX(8px)",
  //     },
  //   } as SxProps<Theme>,

  //   featureText: {
  //     color: "#ffffff",
  //     fontWeight: 500,
  //     fontSize: "1.1rem",
  //   } as SxProps<Theme>,

  //   rightContainer: {
  //     position: "absolute",
  //     right: 0,
  //     transform: "translateY(-50%)",
  //     width: { md: "45%", lg: "42%" },
  //     height: "100%",
  //     borderTopLeftRadius: "30%",
  //     borderBottomLeftRadius: "30%",

  //     zIndex: 20,
  //     display: { xs: "flex", md: "flex" },
  //     alignItems: "center",
  //     justifyContent: "center",
  //     "@media (max-width: 900px)": {
  //       position: "static",
  //       width: "100%",
  //       height: "100vh",
  //       transform: "none",
  //       borderRadius: "0",
  //       boxShadow: "none",
  //       top: "auto",
  //       right: "auto",
  //     },
  //   } as SxProps<Theme>,

  //   formContainer: {
  //     width: "100%",
  //     maxWidth: "350px",
  //   } as SxProps<Theme>,

  //   formHeader: {
  //     marginBottom: "70px",
  //     textAlign: "center",
  //     display: "flex",
  //     flexDirection: "column",
  //     alignItems: "center",
  //   } as SxProps<Theme>,

  //   signInTitle: {
  //     display: { xs: "none", md: "flex" },
  //     background: "linear-gradient(135deg, #4a6cf7 0%, #667eea 50%, #764ba2 100%)",
  //     WebkitBackgroundClip: "text",
  //     WebkitTextFillColor: "transparent",
  //     backgroundClip: "text",
  //     fontWeight: 900,
  //     fontSize: "2rem",
  //   } as SxProps<Theme>,

  //   signInLogo: {
  //     display: { xs: "flex", md: "none" },
  //     width: 300,
  //     height: "auto",
  //   } as SxProps<Theme>,

  //   errorAlert: {
  //     position: "absolute",
  //     top: 0,
  //     right: 0,
  //     marginBottom: "24px",
  //     borderRadius: 0,
  //     borderBottomLeftRadius: "10px",
  //   } as SxProps<Theme>,

  //   form: {
  //     display: "flex",
  //     flexDirection: "column",
  //     gap: "24px",
  //   } as SxProps<Theme>,

  //   inputGroup: {
  //     display: "flex",
  //     flexDirection: "column",
  //     gap: "8px",
  //   } as SxProps<Theme>,

  //   inputLabel: {
  //     color: "#555",
  //     fontWeight: 500,
  //     fontSize: "0.9rem",
  //   } as SxProps<Theme>,

  //   passwordToggle: {
  //     color: "#666",
  //     "&:hover": {
  //       color: "#4a6cf7",
  //     },
  //   } as SxProps<Theme>,

  //   submitButton: {
  //     backgroundColor: "#4a6cf7",
  //     color: "#ffffff",
  //     padding: "16px",
  //     borderRadius: "8px",
  //     fontSize: "1rem",
  //     fontWeight: 600,
  //     textTransform: "none",
  //     boxShadow: "0 4px 12px rgba(74, 108, 247, 0.3)",
  //     transition: "all 0.3s ease",
  //     "&:hover": {
  //       backgroundColor: "#3b5cec",
  //       boxShadow: "0 6px 16px rgba(74, 108, 247, 0.4)",
  //       transform: "translateY(-2px)",
  //     },
  //     "&:disabled": {
  //       backgroundColor: "#b0b9c9",
  //       color: "#ffffff",
  //       boxShadow: "none",
  //       transform: "none",
  //     },
  //   } as SxProps<Theme>,

  //   formFooter: {
  //     marginTop: "32px",
  //     textAlign: "center",
  //   } as SxProps<Theme>,

  //   footerText: {
  //     fontSize: "0.85rem",
  //   } as SxProps<Theme>,
};
