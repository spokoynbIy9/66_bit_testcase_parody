import { Link, useLocation, useParams } from "react-router-dom";
import { Breadcrumbs } from "@mui/material";
import { useMemo } from "react";
import { useGetEmployeeInfoQuery } from "@/features/EmployeeInfo/api/EmployeeInfoApi";
import { skipToken } from "@reduxjs/toolkit/query";

const BreadCrumbs = () => {
  const location = useLocation();
  const { id } = useParams();
  const { data: employee, isLoading } = useGetEmployeeInfoQuery(
    id || skipToken
  );

  const labelBreadCrumb = (path: string) => {
    switch (path) {
      case "/list-employee":
        return "Список сотрудников";
      case `/list-employee/${id}`:
        return employee ? employee.name : "Сотрудник не найден";
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
  }, [location.pathname, id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <Breadcrumbs separator=">">{breadCrumbs}</Breadcrumbs>;
};

export default BreadCrumbs;
