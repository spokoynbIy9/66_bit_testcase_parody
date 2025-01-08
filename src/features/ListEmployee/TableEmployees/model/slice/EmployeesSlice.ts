import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EmployeesSchema } from "../types/EmployeesSchema";
import { EmployeesModel } from "../types/EmployeesModel";

const initialState: EmployeesSchema = {
  Employees: [],
};

export const EmployeesSlice = createSlice({
  name: "Employees",
  initialState,
  reducers: {
    setEmployees: (state, action: PayloadAction<EmployeesModel[]>) => {
      state.Employees = action.payload;
    },
  },
});

export const { setEmployees } = EmployeesSlice.actions;
export const { reducer: employeesReducer } = EmployeesSlice;
