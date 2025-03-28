import React from "react";
import InputField from "../InputField";
import SelectField from "../SelectField";
import { states } from "../../../assets/data/dataOptions";
import { capitalizeText } from "../utils/validateForm";

/**
 * Interface formulaire section adresse.
 */
interface AddressFormProps {
    /** Données du formulaire contenant les champs d'adresse */
    formData: {
        street: string;
        city: string;
        state: string;
        zipCode: string;
    };
    /** Objet contenant les erreurs associées à chaque champ */
    errors: { [key: string]: string };
    /** Fonction de gestion des changements de valeur dans les champs */
    onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => void;
}

/**
 * Composant représentant un formulaire d'adresse.
 *
 * @param {AddressFormProps} props - Propriétés du composant.
 * @returns {JSX.Element} - Le formulaire d'adresse.
 */
const AddressForm: React.FC<AddressFormProps> = ({
    formData,
    errors,
    onChange,
}) => {
    return (
        <fieldset className="form-section">
            <legend className="form-label">Address</legend>

            {/* Champ pour la rue */}
            <InputField
                label="Street"
                id="street"
                minLength={2}
                value={capitalizeText(formData.street)}
                onChange={onChange}
                error={errors.street}
            />

            {/* Champ pour la ville */}
            <InputField
                label="City"
                id="city"
                type="text"
                minLength={2}
                value={capitalizeText(formData.city)}
                onChange={onChange}
                error={errors.city}
            />

            {/* Sélecteur d'état */}
            <SelectField
                label="State"
                id="state"
                placeholder="--"
                options={states.map(({ name, abbreviation }) => ({
                    name,
                    value: abbreviation,
                }))}
                value={formData.state}
                onChange={onChange}
                error={errors.state}
            />

            {/* Champ pour le code postal */}
            <InputField
                label="Zip Code"
                id="zipCode"
                type="number"
                minLength={5}
                value={formData.zipCode}
                onChange={onChange}
                error={errors.zipCode}
            />
        </fieldset>
    );
};

export default AddressForm;
