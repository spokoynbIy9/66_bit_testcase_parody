import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useGetEmployeesQuery } from "../api/listEmployeesApi";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setEmployees } from "../model/slice/EmployeesSlice";

export const TableEmployees = () => {
  const { data, isLoading } = useGetEmployeesQuery();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //@todo
  //Убрать всё что связано с redux

  useEffect(() => {
    if (!isLoading) {
      console.log(data);
      dispatch(setEmployees(data || []));
    }
  }, [data, dispatch, isLoading]);

  if (isLoading) {
    return "Подгрузка данных...";
  }

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ФИО</TableCell>
            <TableCell align="right">Должность</TableCell>
            <TableCell align="right">Телефон</TableCell>
            <TableCell align="right">Дата рождения</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((employee) => (
            <TableRow
              key={employee.id}
              onClick={() => navigate(`/list-employee/${employee.id}`)}
            >
              <TableCell>{employee.name}</TableCell>
              <TableCell align="right">{employee.position}</TableCell>
              <TableCell align="right">{employee.phone}</TableCell>
              <TableCell align="right">{employee.birthdate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
