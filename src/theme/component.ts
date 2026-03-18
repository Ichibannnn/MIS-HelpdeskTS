import type { ThemeOptions } from "@mui/material/styles";

const components: ThemeOptions["components"] = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 10,
        padding: "8px 18px",
      },
    },
    defaultProps: {
      disableElevation: true,
      size: "small",
    },
  },

  MuiTextField: {
    defaultProps: {
      variant: "outlined",
      // size: "small",
      fullWidth: true,
    },
  },

  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "#9e77ed",
        },

        "&:active .MuiOutlinedInput-notchedOutline": {
          borderColor: "#9e77ed",
        },
        "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
          borderColor: "#2D3748",
        },
      },
    },
  },

  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: 12,
      },
    },
  },

  MuiTableCell: {
    styleOverrides: {
      head: {
        fontWeight: 700,
      },
    },
  },
};

export default components;
