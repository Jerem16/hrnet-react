import React from "react";
import InputField from "../InputField";
import SelectField from "../SelectField";
import { states } from "../../../assets/data/dataOptions";
import { capitalizeText } from "../utils/validateForm";

interface AddressFormProps {
    formData: {
        street: string;
        city: string;
        state: string;
        zipCode: string;
    };
    errors: { [key: string]: string };
    onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => void;
}

const AddressForm: React.FC<AddressFormProps> = ({
    formData,
    errors,
    onChange,
}) => {
    return (
        <fieldset className="border p-4 rounded mb-4">
            <legend className="font-semibold">Address</legend>
            <InputField
                label="Street"
                id="street"
                minLength={2}
                value={capitalizeText(formData.street)}
                onChange={onChange}
                error={errors.street}
            />
            <InputField
                label="City"
                id="city"
                type="text"
                minLength={2}
                value={capitalizeText(formData.city)}
                onChange={onChange}
                error={errors.city}
            />
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
