import React from "react";
import SelectField from "../SelectField";
import InputField from "../InputField";
import { departments } from "../../../assets/data/dataOptions";
import { capitalizeText } from "../utils/validateForm";

interface DepartmentFormProps {
    formData: {
        startDate: string;
        dateOfBirth: string;
    };
    department: string;
    error: string;
    errors: { [key: string]: string };
    onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => void;
    disabled?: boolean; // ✅ Désormais optionnel
}

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
            <SelectField
                label="Department"
                id="department"
                placeholder="--"
                options={departments.map(({ name }) => ({ name, value: name }))}
                value={capitalizeText(department)}
                onChange={onChange}
                error={error}
            />
            <InputField
                label="Start Date"
                id="startDate"
                type="date"
                value={formData.startDate}
                onChange={onChange}
                minLength={10}
                error={errors.startDate}
                disabled={!formData.dateOfBirth}
            />
        </fieldset>
    );
};

export default DepartmentForm;
