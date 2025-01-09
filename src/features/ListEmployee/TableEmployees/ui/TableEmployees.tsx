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

export const TableEmployees = () => {
  const { data, isLoading } = useGetEmployeesQuery();
  const navigate = useNavigate();

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
