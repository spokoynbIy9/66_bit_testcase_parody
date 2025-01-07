import { Link, useLocation } from "react-router-dom";
import { Breadcrumbs } from "@mui/material"; // Assuming you use Material UI
import { useMemo } from "react";

const BreadCrumbs = () => {
  const location = useLocation();

  const labelBreadCrumb = (path: string) => {
    switch (path) {
      case "/list-employee":
        return "Список сотрудников";
      default:
        return "Страница не найдена";
    }
  };

  const breadCrumbs = useMemo(() => {
    const pathnames = location.pathname.split("/").filter((x) => x);
    return [
      <Link to="/" key="/">
        Главная
      </Link>,
      ...pathnames.map((_, index) => {
        const path = `/${pathnames.slice(0, index + 1).join("/")}`;
        const label = labelBreadCrumb(path);
        return (
          <Link to={path} key={path}>
            {label}
          </Link>
        );
      }),
    ];
  }, [location.pathname]);

  return <Breadcrumbs separator=">">{breadCrumbs}</Breadcrumbs>;
};

export default BreadCrumbs;
