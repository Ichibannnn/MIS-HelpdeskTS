import { ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    custom: {
      loginBackground: string;
      paperColor: {
        primary?: string;
        secondary?: string;
        tertiary?: string;
      };
    };
  }

  interface ThemeOptions {
    custom?: {
      loginBackground?: string;
      paperColor: {
        primary?: string;
        secondary?: string;
        tertiary?: string;
      };
    };
  }
}
