import React from "react";
import SelectField from "../SelectField";
import InputField from "../InputField";
import { departments } from "../../../assets/data/dataOptions";
import { capitalizeText } from "../utils/validateForm";

/**
 * Interface formulaire section informations professionnelles.
 */
interface DepartmentFormProps {
    /** Données du formulaire contenant la date de début et la date de naissance */
    formData: {
        startDate: string;
        dateOfBirth: string;
    };
    /** Département sélectionné */
    department: string;
    /** Message d'erreur associé au champ département */
    error: string;
    /** Objet contenant les erreurs associées aux champs */
    errors: { [key: string]: string };
    /** Fonction de gestion des changements de valeur dans les champs */
    onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => void;
}

/**
 * Composant représentant un formulaire d'informations professionnelles.
 *
 * @param {DepartmentFormProps} props - Propriétés du composant.
 * @returns {JSX.Element} - Le formulaire des informations professionnelles.
 */
const DepartmentForm: React.FC<DepartmentFormProps> = ({
    formData,
    department,
    error,
    errors,
    onChange,
}) => {
    return (
        <fieldset className="form-section">
            <legend className="form-label">Professional Information</legend>

            {/* Sélecteur du département */}
            <SelectField
                label="Department"
                id="department"
                placeholder="--"
                options={departments.map(({ name }) => ({ name, value: name }))}
                value={capitalizeText(department)}
                onChange={onChange}
                error={error}
            />

            {/* Champ de saisie pour la date de début */}
            <InputField
                label="Start Date"
                id="startDate"
                type="date"
                value={formData.startDate}
                onChange={onChange}
                minLength={10}
                error={errors.startDate}
                disabled={!formData.dateOfBirth} // Désactive si la date de naissance est absente
            />
        </fieldset>
    );
};

export default DepartmentForm;
