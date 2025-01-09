import { EmployeesModel } from "@/features/ListEmployee/TableEmployees/model/types/EmployeesModel";
import { baseApi } from "@/shared/api/baseApi";

const employeeInfoApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployeeInfo: builder.query<EmployeesModel, string>({
      query: (id: string) => `Employee/${id}`,
    }),
  }),
});

export const { useGetEmployeeInfoQuery } = employeeInfoApi;
