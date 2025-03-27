import { ChangeEvent } from "react";
import {
    validateStreet,
    validateName,
    validateBirthDate,
    validateZipCode,
    isNotEmpty,
    validateStartDate,
} from "./funcValidationForm"; // Import des fonctions de validation
import { FormData } from "../../../interface"; // Import de l'interface des données du formulaire

/**
 * Objet contenant les valeurs initiales du formulaire.
 * Chaque champ est initialisé avec une chaîne vide.
 */
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

/**
 * Fonction utilitaire pour capitaliser chaque mot d'une chaîne de caractères.
 * Ex: "jean dupont" -> "Jean Dupont"
 *
 * @param {string} text - Texte à transformer
 * @returns {string} - Texte transformé avec la première lettre de chaque mot en majuscule
 */
export const capitalizeText = (text: string): string =>
    text
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

/**
 * Valide l'ensemble des champs du formulaire en utilisant les fonctions de validation.
 *
 * @param {FormData} formData - Données actuelles du formulaire
 * @returns {Object} - Un objet contenant les messages d'erreur pour chaque champ invalide
 */
export const validateForm = (formData: FormData): { [key: string]: string } => {
    return {
        firstName: validateName(formData.firstName),
        lastName: validateName(formData.lastName),
        dateOfBirth:
            isNotEmpty(formData.dateOfBirth, "Date de naissance") ||
            validateBirthDate(formData.dateOfBirth),
        startDate: validateStartDate(formData.startDate, formData.dateOfBirth),
        street: validateStreet(formData.street),
        city: validateName(formData.city),
        state: isNotEmpty(formData.state, "État"),
        zipCode: validateZipCode(formData.zipCode, "Code postal"),
        department: isNotEmpty(formData.department, "Département"),
    };
};

/**
 * Valide un champ individuel lorsqu'il est modifié.
 *
 * @param {ChangeEvent<HTMLInputElement | HTMLSelectElement>} e - Événement de changement sur un champ de saisie ou de sélection
 * @param {FormData} formData - Données actuelles du formulaire
 * @returns {string} - Message d'erreur si la validation échoue, sinon une chaîne vide
 */
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
            error = validateStreet(value);
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
