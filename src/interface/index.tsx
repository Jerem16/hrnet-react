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
    id: keyof FormData;
    type?: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export interface SelectOption {
    name: string;
    value: string;
    abbreviation?: string;
}

export interface SelectFieldProps {
    label: string;
    id: keyof FormData;
    options: SelectOption[]; // 🔥 Accepte un tableau d'objets
    value: string;
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

// data
