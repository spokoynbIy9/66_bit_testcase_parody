import { HomePage } from "@/pages/HomePage";
import { ListEmployeePage } from "@/pages/ListEmployeePage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { RouteProps } from "react-router-dom";

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
  hasLayout: boolean;
};

export enum AppRoutes {
  Home = "Home",
  ListEmployee = "ListEmployee",
  NotFoundPage = "NotFoundPage",
}

export const RoutesPath: Record<AppRoutes, string> = {
  [AppRoutes.Home]: "/",
  [AppRoutes.ListEmployee]: "/list-employee",
  [AppRoutes.NotFoundPage]: "*",
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.Home]: {
    path: RoutesPath.Home,
    element: <HomePage />,
    hasLayout: true,
  },
  [AppRoutes.ListEmployee]: {
    path: RoutesPath.ListEmployee,
    element: <ListEmployeePage />,
    hasLayout: true,
  },
  [AppRoutes.NotFoundPage]: {
    path: RoutesPath.NotFoundPage,
    element: <NotFoundPage />,
    hasLayout: true,
  },
};
