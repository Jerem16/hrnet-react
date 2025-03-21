import React from "react";
import InputField from "../InputField";
import { capitalizeText } from "../utils/validateForm";

interface PersonalInfoFormProps {
    formData: {
        firstName: string;
        lastName: string;
        dateOfBirth: string;
        startDate: string;
    };
    errors: { [key: string]: string };
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({
    formData,
    errors,
    onChange,
}) => {
    return (
        <fieldset className="form-section">
            <legend className="form-label">Personal Information</legend>
            <InputField
                label="First Name"
                id="firstName"
                type="text"
                minLength={2}
                value={capitalizeText(formData.firstName)}
                onChange={onChange}
                error={errors.firstName}
            />
            <InputField
                label="Last Name"
                id="lastName"
                type="text"
                minLength={2}
                value={capitalizeText(formData.lastName)}
                onChange={onChange}
                error={errors.lastName}
            />
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
