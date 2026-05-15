// components/Sidebar.tsx
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Box, Typography, Divider, Tooltip, Avatar, Chip, Stack, type Theme } from "@mui/material";
import { Dashboard, ShoppingCart, BarChart, MenuBook, Notifications, TrendingUp, People, Logout } from "@mui/icons-material";

import { useSelector } from "react-redux";
import { useState } from "react";
import { useAppDispatch } from "../hooks/useRedux";
import { useLocation, useNavigate } from "react-router";

import { sbStyles } from "./styles/sbSyles";
import helpDeskLogo from "../assets/images/helpdesk_icon.png";

import { signOut } from "../features/auth/authSlice";
import { clearUserDetails } from "../features/user/userSlice";
import type { MenuSection } from "../types/sidebar.type";

const drawerWidth = 260;
const collapsedWidth = 72;

const menuSections: MenuSection[] = [
  {
    section: "Overview",
    items: [
      { label: "Dashboard", icon: <Dashboard />, path: "/dashboard" },
      { label: "Analytics", icon: <TrendingUp />, path: "/analytics" },
    ],
  },
  {
    section: "Manage",
    items: [
      { label: "E-commerce", icon: <ShoppingCart />, path: "/ecommerce", badge: "New" },
      { label: "Charts", icon: <BarChart />, path: "/charts" },
      { label: "Users", icon: <People />, path: "/users" },
    ],
  },
  {
    section: "Resources",
    items: [
      { label: "Documentation", icon: <MenuBook />, path: "/docs" },
      { label: "Notifications", icon: <Notifications />, path: "/notifications", badge: "3" },
    ],
  },
];

const sidebarStyles = {
  paper: (isOpen: boolean) => ({
    width: isOpen ? drawerWidth : collapsedWidth,
    transition: "width 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    overflowX: "hidden" as const,
    backgroundColor: (theme: Theme) => theme.custom.paperColor.secondary,
    color: "#fff",
    borderRight: "1px solid rgba(255,255,255,0.06)",
    borderRadius: 0,
    display: "flex",
    flexDirection: "column" as const,
    boxShadow: "4px 10px 22px -1px rgba(0,0,0,0.35);-webkit-box-shadow: 4px 10px 22px -1px rgba(0,0,0,0.35);-moz-box-shadow: 4px 10px 22px -1px rgba(0,0,0,0.35;",
  }),
};

const Sidebar = () => {
  const isOpen = useSelector((state: any) => state.sidebar.isOpen);
  const location = useLocation();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [activePath, setActivePath] = useState(location.pathname || "/dashboard");

  const handleNav = (path: string) => {
    setActivePath(path);
    navigate(path);
  };

  const logoutHandler = () => {
    dispatch(signOut());
    dispatch(clearUserDetails());

    navigate("/login");
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: isOpen ? drawerWidth : collapsedWidth,
        "& .MuiDrawer-paper": sidebarStyles.paper(isOpen),
      }}
    >
      {/* ── LOGO ── */}
      <Box sx={sbStyles.headerContainer}>
        <Box sx={sbStyles.logoContainer}>
          <img src={helpDeskLogo} alt="dotek-icon" width="54" height="28" className="logo-sidebar" />
        </Box>

        <Box sx={{ ...sbStyles.logoTextContainer, opacity: isOpen ? 1 : 0, transform: isOpen ? "translateX(0)" : "translateX(-10px)" }}>
          <Stack direction="row" gap={0.5} mt={0.5}>
            <Typography sx={sbStyles.misText}>MIS</Typography>
            <Typography sx={sbStyles.heldeskText}>HELPDESK</Typography>
          </Stack>

          <Typography sx={sbStyles.heldeskProductionText}>Production</Typography>
        </Box>
      </Box>

      <Divider sx={sbStyles.sidebarDivider} />

      {/* ── NAV SECTIONS ── */}
      <Box sx={sbStyles.navSectionContainer}>
        {menuSections.map((section) => (
          <Box key={section.section} sx={{ mb: 0.5 }}>
            {/* Section label */}
            <Box
              sx={{
                ...sbStyles.navSectionLabelContainer,
                opacity: isOpen ? 1 : 0,
                height: isOpen ? "auto" : 0,
              }}
            >
              <Typography sx={sbStyles.navSectionText}>{section.section}</Typography>
            </Box>

            <List disablePadding>
              {section.items.map((item) => {
                const isActive = activePath === item.path;
                return (
                  <Tooltip
                    key={item.path}
                    title={!isOpen ? item.label : ""}
                    placement="right"
                    arrow
                    componentsProps={{
                      tooltip: {
                        sx: {
                          bgcolor: "#1E293B",
                          color: "#F8FAFC",
                          fontSize: 12,
                          fontWeight: 600,
                          border: "1px solid rgba(255,255,255,0.08)",
                          boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                        },
                      },
                      arrow: { sx: { color: "#1E293B" } },
                    }}
                  >
                    <ListItemButton
                      onClick={() => handleNav(item.path)}
                      sx={{
                        mx: 1,
                        mb: 0.25,
                        borderRadius: "10px",
                        px: isOpen ? 1.5 : 1,
                        py: 1,
                        justifyContent: isOpen ? "initial" : "center",
                        position: "relative",
                        transition: "all 0.2s ease",
                        backgroundColor: isActive ? "rgba(245,158,11,0.12)" : "transparent",
                        "&:hover": {
                          backgroundColor: isActive ? "rgba(245,158,11,0.18)" : "rgba(255,255,255,0.05)",
                        },

                        // Active left bar
                        "&::before": isActive
                          ? {
                              content: '""',
                              position: "absolute",
                              left: 0,
                              top: "20%",
                              height: "60%",
                              width: 3,
                              borderRadius: "0 4px 4px 0",
                              backgroundColor: "#F59E0B",
                              boxShadow: isActive ? "0 0 0 1px rgba(245,158,11,0.2), 0 4px 12px rgba(245,158,11,0.15)" : "none",
                            }
                          : {},
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          color: isActive ? "#F59E0B" : "#64748B",
                          minWidth: 0,
                          mr: isOpen ? 1.5 : "auto",
                          justifyContent: "center",
                          transition: "color 0.2s",
                          "& svg": { fontSize: 20 },
                        }}
                      >
                        {item.icon}
                      </ListItemIcon>

                      <ListItemText
                        primary={item.label}
                        sx={{
                          opacity: isOpen ? 1 : 0,
                          transition: "opacity 0.2s",
                          m: 0,
                          "& .MuiListItemText-primary": {
                            fontSize: 13.5,
                            fontWeight: isActive ? 600 : 400,
                            color: isActive ? "#F8FAFC" : "#94A3B8",
                            letterSpacing: "0.1px",
                            transition: "color 0.2s, font-weight 0.2s",
                          },
                        }}
                      />

                      {/* Badge */}
                      {isOpen && item.badge && (
                        <Chip
                          label={item.badge}
                          size="small"
                          sx={{
                            height: 18,
                            fontSize: 10,
                            fontWeight: 700,
                            letterSpacing: "0.3px",
                            bgcolor: item.badge === "New" ? "rgba(245,158,11,0.2)" : "rgba(239, 68, 68, 0.2)",
                            color: item.badge === "New" ? "#F59E0B" : "#F87171",
                            border: `1px solid ${item.badge === "New" ? "rgba(245,158,11,0.3)" : "rgba(239,68,68,0.3)"}`,
                            "& .MuiChip-label": { px: 0.75 },
                          }}
                        />
                      )}
                    </ListItemButton>
                  </Tooltip>
                );
              })}
            </List>
          </Box>
        ))}
      </Box>

      {/* ── FOOTER ── */}
      <Box>
        {/* User profile */}
        <Box
          sx={{
            px: 1.5,
            py: 1.5,
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            cursor: "pointer",
            borderRadius: "10px",
            mx: 1,
            mb: 1,
            transition: "background 0.2s",
            justifyContent: isOpen ? "flex-start" : "center",
            "&:hover": { backgroundColor: "rgba(255,255,255,0.04)" },
          }}
        >
          <Avatar
            sx={{
              width: 34,
              height: 34,
              bgcolor: "#1E3A5F",
              border: "2px solid rgba(245,158,11,0.3)",
              fontSize: 13,
              fontWeight: 700,
              color: "#F59E0B",
              flexShrink: 0,
            }}
          >
            GP
          </Avatar>

          <Box
            sx={{
              flex: 1,
              minWidth: 0,
              overflow: "hidden",
              transition: "opacity 0.2s, width 0.3s",
              opacity: isOpen ? 1 : 0,
              width: isOpen ? "auto" : 0,
              whiteSpace: "nowrap",
            }}
          >
            <Typography sx={{ fontSize: 13, fontWeight: 600, color: "#F8FAFC", lineHeight: 1.3 }}>Gib Ibanson Pangilinan</Typography>
            <Typography sx={{ fontSize: 11, color: "#64748B" }}>Administrator</Typography>
          </Box>

          {isOpen && (
            <Tooltip title="Sign out" placement="top">
              <Box
                sx={{
                  color: "#475569",
                  display: "flex",
                  "&:hover": { color: "#94A3B8" },
                  transition: "color 0.2s",
                }}
              >
                <Logout sx={{ fontSize: 16 }} onClick={logoutHandler} />
              </Box>
            </Tooltip>
          )}
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
