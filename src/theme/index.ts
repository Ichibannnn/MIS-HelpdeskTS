import { createTheme, type PaletteMode } from "@mui/material/styles";
import palette from "./palette";
import typography from "./typography";
import components from "./component";

const getTheme = (mode: PaletteMode) =>
  createTheme({
    ...palette(mode),
    typography,
    components,
  });
export default getTheme;
