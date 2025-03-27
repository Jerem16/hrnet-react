import { ChangeEvent } from "react";

/**
 * Interface FormData
 * Représente les données d'un formulaire utilisateur.
 */
export interface FormData {
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
 * Interface InputFieldProps
 * Décrit les props attendues pour un champ de saisie (input).
 */
export interface InputFieldProps {
    label: string; // Libellé affiché au-dessus du champ
    id: string; // Identifiant unique du champ (associé au label)
    error?: string; // Message d'erreur facultatif
    type?: string; // Type d'input (text, number, etc.), par défaut "text"
    value: string; // Valeur actuelle du champ
    minLength?: number; // Longueur minimale requise (si applicable)
    disabled?: boolean; // Indique si le champ est désactivé
    onChange: (e: ChangeEvent<HTMLInputElement>) => void; // Fonction de gestion des changements
}

/**
 * Interface SelectOption
 * Décrit une option dans un champ de sélection (select).
 */
export interface SelectOption {
    seize?: number; // Taille de l'option (non standard, à vérifier)
    name?: string; // Libellé affiché dans la liste déroulante
    value: string | number; // Valeur stockée lors de la sélection
    abbreviation?: string; // Abréviation éventuelle de l'option
}

/**
 * Interface SelectFieldProps
 * Décrit les props attendues pour un champ de sélection (select).
 */
export interface SelectFieldProps {
    label: string; // Libellé affiché au-dessus du select
    id: string; // Identifiant unique du champ
    type?: string; // Type du select (non toujours utile)
    options: SelectOption[]; // 🔥 Tableau des options disponibles
    value: string; // Valeur actuellement sélectionnée
    placeholder?: string; // Texte par défaut avant sélection
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void; // Fonction de gestion des changements
}
