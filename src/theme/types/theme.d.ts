import { ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    custom: {
      loginBackground: string;
    };
  }

  interface ThemeOptions {
    custom?: {
      loginBackground?: string;
    };
  }
}
