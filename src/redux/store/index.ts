import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employeeSlice";

/**
 * Configuration du store Redux.
 * Le store contient l'état des employés avec le reducer `employeeReducer`.
 */
const store = configureStore({
    reducer: {
        employees: employeeReducer, // Réducer pour la gestion des employés
    },
});

/**
 * Type représentant l'état racine du store Redux.
 * Permet de récupérer un type automatiquement dérivé de l'état actuel du store.
 */
export type RootState = ReturnType<typeof store.getState>;

/**
 * Type représentant la fonction dispatch du store.
 * Utilisé pour accéder aux actions du store de manière typée.
 */
export type AppDispatch = typeof store.dispatch;

export default store;
