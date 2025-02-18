import { ChangeEvent } from "react";

export interface FormData {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    startDate: string;
    street: string;
    city: string;
    state: string;
    zipCode: string;
    department: string;
}

export interface InputFieldProps {
    label: string;
    id: string;
    error?: string;
    type?: string;
    value: string;
    minLength?: number;
    disabled?: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export interface SelectOption {
    seize?: number;
    name?: string;
    value: string | number;
    abbreviation?: string;
}

export interface SelectFieldProps {
    label: string;
    id: string;
    type?: string;
    options: SelectOption[]; // 🔥 Accepte un tableau d'objets
    value: string;
    placeholder?: string;
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

// data
