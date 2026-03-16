import { useLocation } from "react-router";
import { useAppSelector } from "../hooks/useRedux";
import { sidebarNavigationData } from "./navigationData";
import { PageNotFound } from "../components/LottieComponents";

interface Props {
  Render: React.ComponentType;
}

const PermittedRoutes: React.FC<Props> = ({ Render }) => {
  const { pathname } = useLocation();
  const permissions = useAppSelector((state) => state?.user?.permissions);

  const allowedNavigationData = sidebarNavigationData?.filter((item) =>
    permissions?.includes(item?.path),
  );

  const currentNavItem = allowedNavigationData?.find((item) =>
    pathname?.includes(item.path),
  );

  const currentSubNav = currentNavItem?.sub?.filter((subItem) =>
    permissions?.includes(subItem.name),
  );

  const permittedParentPath = allowedNavigationData.map((item) =>
    permissions?.includes(item.name) ? item.path : null,
  );

  const permittedSubPath = currentSubNav?.map((item) =>
    permissions?.includes(item.name) ? item.path : null,
  );

  if (
    permittedParentPath.includes(pathname) ||
    permittedSubPath?.includes(pathname) ||
    pathname === "/"
  ) {
    return <Render />;
  }

  return <PageNotFound text="You are not permitted to access this page" />;
};

export default PermittedRoutes;
