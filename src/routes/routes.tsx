import { createBrowserRouter } from "react-router-dom";

import Login from "../pages/login/Login";
import Landing from "../layout/Landing";

import AuthRedirect from "./AuthRedirect";
import Private from "./Private";

import UserManagementPage from "../pages/user-management/UserManagementPage";
import UserAccounts from "../pages/user-management/user-accounts/UserAccounts";
import UserRoles from "../pages/user-management/user-roles/UserRoles";

export const routes = createBrowserRouter([
  {
    path: "/login",
    element: (
      <AuthRedirect>
        <Login />
      </AuthRedirect>
    ),
  },
  {
    path: "/",
    element: <Private Render={Landing} />,
    children: [
      {
        path: "/user-management",
        element: <UserManagementPage />,
        children: [
          {
            path: "/user-management/user-account",
            element: <UserAccounts />,
          },
          {
            path: "/user-management/user-role",
            element: <UserRoles />,
          },
        ],
      },
    ],
  },
]);
