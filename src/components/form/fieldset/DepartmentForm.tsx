import React from "react";
import SelectField from "../SelectField";
import { departments } from "../../../assets/data/dataOptions";
import { capitalizeText } from "../utils/validateForm";

interface DepartmentFormProps {
    department: string;
    error: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const DepartmentForm: React.FC<DepartmentFormProps> = ({
    department,
    error,
    onChange,
}) => {
    return (
        <fieldset className="border p-4 rounded mb-4">
            <legend className="font-semibold">Department</legend>
            <SelectField
                label="Department"
                id="department"
                placeholder="--"
                options={departments.map(({ name }) => ({ name, value: name }))}
                value={capitalizeText(department)}
                onChange={onChange}
                error={error}
            />
        </fieldset>
    );
};

export default DepartmentForm;
