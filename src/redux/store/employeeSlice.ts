import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/**
 * Interface représentant les données d'un employé.
 */
export interface Employee {
    firstName: string; // Prénom de l'utilisateur
    lastName: string; // Nom de famille
    dateOfBirth: string; // Date de naissance
    startDate: string; // Date de début (ex: embauche, adhésion)
    street: string; // Adresse (rue)
    city: string; // Ville
    state: string; // État / Région
    zipCode: string; // Code postal
    department: string; // Département (peut être lié à un service ou une région)
}

/**
 * État initial du store des employés : un tableau vide.
 */
const initialState: Employee[] = [];

/**
 * Slice Redux pour gérer les employés.
 */
const employeeSlice = createSlice({
    name: "employees",
    initialState,
    reducers: {
        /**
         * Ajoute un nouvel employé à la liste.
         *
         * @param {Employee[]} state - Liste actuelle des employés.
         * @param {PayloadAction<Employee>} action - Nouvel employé à ajouter.
         */
        addEmployee: (state, action: PayloadAction<Employee>) => {
            state.push(action.payload);
        },
    },
});

// Export des actions et du reducer
export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
