import { baseApi } from "@/shared/api/baseApi";
import { EmployeesModel } from "../model/types/EmployeesModel";

const listEmployeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployees: builder.query<EmployeesModel[], void>({
      query: () => `Employee`,
    }),
  }),
});

export const { useGetEmployeesQuery } = listEmployeeApi;
