import { ChangeEvent } from "react";
import {
    validateName,
    validateBirthDate,
    validateZipCode,
    isNotEmpty,
    validateStartDate,
} from "./funcValidationForm";
import { FormData } from "../../../interface";

export const initialFormData: FormData = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
};


export const capitalizeText = (text: string): string =>
    text
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");


export const validateForm = (formData: FormData): { [key: string]: string } => {
    return {
        firstName: validateName(formData.firstName),
        lastName: validateName(formData.lastName),
        dateOfBirth:
            isNotEmpty(formData.dateOfBirth, "Date de naissance") ||
            validateBirthDate(formData.dateOfBirth),
        startDate:
            isNotEmpty(formData.startDate, "Date de début") ||
            validateStartDate(formData.startDate, formData.dateOfBirth),
        street: isNotEmpty(formData.street, "Rue"),
        city: validateName(formData.city),
        state: isNotEmpty(formData.state, "État"),
        zipCode: validateZipCode(formData.zipCode, "Code postal"),
        department: isNotEmpty(formData.department, "Département"),
    };
};

export const validateEachInput = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    formData: FormData
): string => {
    const { id, value } = e.target;
    let error = "";

    switch (id) {
        case "firstName":
            error = validateName(value);
            break;
        case "lastName":
            error = validateName(value);
            break;
        case "dateOfBirth":
            error = validateBirthDate(value);
            break;
        case "startDate":
            error = validateStartDate(value, formData.dateOfBirth);
            break;
        case "street":
            error = isNotEmpty(value, "Rue");
            break;
        case "city":
            error = validateName(value);
            break;
        case "state":
            error = isNotEmpty(value, "État");
            break;
        case "zipCode":
            error = validateZipCode(value, "Code postal");
            break;
        case "department":
            error = isNotEmpty(value, "Département");
            break;
        default:
            break;
    }

    return error;
};
