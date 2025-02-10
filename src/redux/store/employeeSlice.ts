import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Interface des employés
export interface Employee {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    startDate: string;
    department: string;
    street: string;
    city: string;
    state: string;
    zipCode: string;
}

// État initial avec un tableau vide
const initialState: Employee[] = [];

const employeeSlice = createSlice({
    name: "employees",
    initialState,
    reducers: {
        addEmployee: (state, action: PayloadAction<Employee>) => {
            state.push(action.payload);
        },
    },
});

// Export des actions et du reducer
export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
