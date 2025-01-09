import { MultipleSelectGender } from "@/features/ListEmployee/MultipleSelectGender";
import { MultipleSelectPosition } from "@/features/ListEmployee/MultipleSelectPosition";
import { MultipleSelectTechnology } from "@/features/ListEmployee/MultipleSelectTechnology";
import { TableEmployees } from "@/features/ListEmployee/TableEmployees";
import { Stack, Typography } from "@mui/material";

const ListEmployeePage = () => {
  return (
    <Stack>
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h4">Список сотрудников</Typography>
        <Stack flexDirection="row">
          <MultipleSelectPosition />
          <MultipleSelectTechnology />
          <MultipleSelectGender />
        </Stack>
      </Stack>
      <TableEmployees />
    </Stack>
  );
};

export default ListEmployeePage;
