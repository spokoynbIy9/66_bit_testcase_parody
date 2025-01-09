import { Avatar, Box, Divider, Stack, Typography } from "@mui/material";
import { skipToken } from "@reduxjs/toolkit/query";
import { useParams } from "react-router-dom";
import { useGetEmployeeInfoQuery } from "../api/EmployeeInfoApi";

export const EmployeeInfo = () => {
  const { id } = useParams();
  const { data: employee } = useGetEmployeeInfoQuery(id || skipToken);
  return (
    <Stack>
      <Stack sx={{ flexDirection: "row", gap: "40px" }}>
        <Avatar
          src={`${employee?.photo}`}
          sx={{ width: "170px", height: "170px" }}
        />
        <Stack flexDirection="column">
          <Typography variant="h4">
            <Box fontWeight={700} display="inline">
              {employee?.name}
            </Box>
          </Typography>
          <Typography textAlign="left">{employee?.position}</Typography>
          <Stack>
            {employee?.stack.map((lang) => (
              <Typography key={lang} textAlign="left">
                {lang}
              </Typography>
            ))}
          </Stack>
        </Stack>
      </Stack>
      <Divider />
      <Stack>
        <Typography variant="h4">Основная информация</Typography>
        <Stack>
          <Typography>Контактный телефон {employee?.phone}</Typography>
          <Typography>Дата рождения {employee?.birthdate}</Typography>
          <Typography>Дата утройства {employee?.dateOfEmployment}</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
