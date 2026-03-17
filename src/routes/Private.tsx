import { Navigate } from "react-router";
import { useAppSelector } from "../hooks/useRedux";
import PermittedRoutes from "./PermittedRoutes";

interface Props {
  Render: React.ComponentType;
}

const Private = ({ Render }: Props) => {
  const fullname = useAppSelector((state) => state?.user?.fullname);
  const permissions = useAppSelector((state) => state?.user?.permissions);

  return !fullname || permissions?.length === 0 ? <Navigate to="/login" /> : <PermittedRoutes Render={Render} />;
};

export default Private;
