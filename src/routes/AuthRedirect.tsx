import type { ReactNode } from "react";
import { useAppSelector } from "../hooks/useRedux";
import { Navigate } from "react-router";

interface Props {
  children: ReactNode;
}

const AuthRedirect: React.FC<Props> = ({ children }) => {
  const fullname = useAppSelector((state) => state?.user?.fullname);
  const permissions = useAppSelector((state) => state?.user?.permissions ?? []);

  if (fullname && permissions?.length > 0) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AuthRedirect;
