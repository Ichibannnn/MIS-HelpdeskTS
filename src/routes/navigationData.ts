export interface SubNavigation {
  id: number;
  name: string;
  path: string;
}

export interface NavigationItem {
  id: number;
  name: string;
  path: string;
  sub?: SubNavigation[];
}

export const sidebarNavigationData: NavigationItem[] = [
  {
    id: 1,
    path: "/overview",
    name: "Overview",
  },
  {
    id: 2,
    path: "/user-management",
    name: "User Management",
    sub: [
      {
        id: 1,
        name: "User Account",
        path: "/user-management/user-account",
      },
      {
        id: 2,
        name: "User Role",
        path: "/user-management/user-role",
      },
    ],
  },
];
