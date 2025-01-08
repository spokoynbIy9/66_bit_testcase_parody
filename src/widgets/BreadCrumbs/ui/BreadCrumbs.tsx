import { Link, useLocation, useParams } from "react-router-dom";
import { Breadcrumbs } from "@mui/material"; // Assuming you use Material UI
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { getEmployees } from "@/features/ListEmployee/TableEmployees/model/selectors/getEmployees";

//@todo
//Убрать всё что связано с redux
const BreadCrumbs = () => {
  const location = useLocation();
  const { id } = useParams();
  const employees = useSelector(getEmployees);

  const labelBreadCrumb = (path: string) => {
    switch (path) {
      case "/list-employee":
        return "Список сотрудников";
      case `/list-employee/${id}`: {
        const employee = employees.find((emp) => {
          return emp.id === Number(id);
        });
        return employee ? employee.name : "Сотрудник не найден";
      }
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
  }, [location.pathname, employees, id]);

  return <Breadcrumbs separator=">">{breadCrumbs}</Breadcrumbs>;
};

export default BreadCrumbs;
