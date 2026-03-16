import { Navigate } from "react-router";
import { useAppSelector } from "../hooks/useRedux";

interface Props {
  Render: React.ComponentType;
}

const Private = ({ Render }: Props) => {
  const fullname = useAppSelector((state) => state?.user?.fullname);
  const permission = useAppSelector((state) => state?.user?.permission);

  return !fullname || permission?.length === 0 ? <Navigate to="/login" /> : <PermittedRoutes Render={Render} />;
};

export default Private;
