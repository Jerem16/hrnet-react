import React from "react";
import InputField from "../InputField";
import { capitalizeText } from "../utils/validateForm";

/**
 * Interface formulaire section informations personnelles.
 */
interface PersonalInfoFormProps {
    /** Données du formulaire contenant le prénom, nom, date de naissance et date de début */
    formData: {
        firstName: string;
        lastName: string;
        dateOfBirth: string;
        startDate: string;
    };
    /** Objet contenant les erreurs associées aux champs */
    errors: { [key: string]: string };
    /** Fonction de gestion des changements de valeur dans les champs */
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Composant représentant un formulaire d'informations personnelles.
 *
 * @param {PersonalInfoFormProps} props - Propriétés du composant.
 * @returns {JSX.Element} - Le formulaire des informations personnelles.
 */
const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({
    formData,
    errors,
    onChange,
}) => {
    return (
        <fieldset className="form-section">
            <legend className="form-label">Personal Information</legend>

            {/* Champ de saisie pour le prénom */}
            <InputField
                label="First Name"
                id="firstName"
                type="text"
                minLength={2}
                value={capitalizeText(formData.firstName)}
                onChange={onChange}
                error={errors.firstName}
            />

            {/* Champ de saisie pour le nom */}
            <InputField
                label="Last Name"
                id="lastName"
                type="text"
                minLength={2}
                value={capitalizeText(formData.lastName)}
                onChange={onChange}
                error={errors.lastName}
            />

            {/* Champ de saisie pour la date de naissance */}
            <InputField
                label="Date of Birth"
                id="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={onChange}
                minLength={10}
                error={errors.dateOfBirth}
            />
        </fieldset>
    );
};

export default PersonalInfoForm;
