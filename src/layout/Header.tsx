import { AppBar, Toolbar, IconButton, Box, Badge, Avatar, Tooltip, Typography, type Theme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../features/sidebar/sidebarSlice";
import { useThemeMode } from "../context/ThemeContext";
import { DarkMode, LightMode } from "@mui/icons-material";

const Header = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: any) => state.sidebar.isOpen);

  const { mode, toggleTheme } = useThemeMode();

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: (theme: Theme) => theme.custom.paperColor.secondary,
        // borderBottom: "1px solid rgba(255,255,255,0.07)",
        // backgroundImage: "none",
        zIndex: (theme) => theme.zIndex.drawer - 1,
        borderRadius: 0,
      }}
    >
      <Toolbar
        sx={{
          minHeight: "64px !important",
          px: { xs: 2, sm: 3 },
          gap: 1,
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Toggle */}
        <IconButton
          onClick={() => dispatch(toggleSidebar())}
          size="small"
          sx={{
            color: "#64748B",
            // borderRadius: "8px",
            p: 0.75,
            transition: "all 0.2s",
            "&:hover": {
              color: "#F8FAFC",
              backgroundColor: "rgba(255,255,255,0.07)",
            },
          }}
        >
          {isOpen ? <MenuOpenIcon fontSize="small" /> : <MenuIcon fontSize="small" />}
        </IconButton>

        {/* Breadcrumb */}
        <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center", gap: 0.75, ml: 0.5 }}>
          <Typography sx={{ fontSize: 12, color: "#475569", fontWeight: 500 }}>Pages</Typography>
          <Typography sx={{ fontSize: 12, color: "#334155" }}>/</Typography>
          <Typography sx={{ fontSize: 12, color: "#94A3B8", fontWeight: 600 }}>Dashboard</Typography>
        </Box>

        {/* Spacer */}
        <Box sx={{ flex: 1 }} />

        {/* Search */}
        {/* <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 1,
            backgroundColor: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "10px",
            px: 1.5,
            py: 0.6,
            transition: "all 0.2s",
            "&:focus-within": {
              backgroundColor: "rgba(255,255,255,0.07)",
              borderColor: "rgba(245,158,11,0.4)",
              boxShadow: "0 0 0 3px rgba(245,158,11,0.08)",
            },
          }}
        >
          <SearchIcon sx={{ fontSize: 16, color: "#475569" }} />
          <InputBase
            placeholder="Search..."
            sx={{
              fontSize: 13,
              color: "#94A3B8",
              width: 160,
              "& input::placeholder": { color: "#475569", opacity: 1 },
            }}
          />
          <Typography
            sx={{
              fontSize: 10,
              color: "#334155",
              fontWeight: 600,
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "4px",
              px: 0.5,
              py: 0.1,
              letterSpacing: "0.5px",
            }}
          >
            ⌘K
          </Typography>
        </Box> */}

        {/* Actions */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          {/* Theme toggle */}
          <Tooltip title="Toggle theme" placement="bottom">
            <IconButton
              size="small"
              sx={{
                color: "#64748B",
                borderRadius: "8px",
                p: 0.75,
                transition: "all 0.2s",
                "&:hover": {
                  color: "#F8FAFC",
                  backgroundColor: "rgba(255,255,255,0.07)",
                },
              }}
              onClick={toggleTheme}
            >
              {mode === "light" ? <DarkMode /> : <LightMode />}
              {/* <LightModeOutlinedIcon fontSize="small" /> */}
            </IconButton>
          </Tooltip>

          {/* Notifications */}
          <Tooltip title="Notifications" placement="bottom">
            <IconButton
              size="small"
              sx={{
                color: "#64748B",
                borderRadius: "8px",
                p: 0.75,
                transition: "all 0.2s",
                "&:hover": {
                  color: "#F8FAFC",
                  backgroundColor: "rgba(255,255,255,0.07)",
                },
              }}
            >
              <Badge
                badgeContent={3}
                sx={{
                  "& .MuiBadge-badge": {
                    fontSize: 9,
                    fontWeight: 700,
                    minWidth: 16,
                    height: 16,
                    bgcolor: "#EF4444",
                    color: "#fff",
                  },
                }}
              >
                <NotificationsNoneIcon fontSize="small" />
              </Badge>
            </IconButton>
          </Tooltip>

          {/* Avatar */}
          <Tooltip title="Gib Ibanson Pangilinan · Administrator" placement="bottom">
            <Avatar
              sx={{
                width: 30,
                height: 30,
                bgcolor: "#1E3A5F",
                border: "2px solid rgba(245,158,11,0.3)",
                fontSize: 11,
                fontWeight: 700,
                color: "#F59E0B",
                cursor: "pointer",
                ml: 0.5,
                transition: "border-color 0.2s",
                "&:hover": { borderColor: "rgba(245,158,11,0.7)" },
              }}
            >
              GP
            </Avatar>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
