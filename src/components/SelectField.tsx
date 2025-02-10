import React from "react";
import { SelectFieldProps } from "../interface";

const SelectField: React.FC<SelectFieldProps> = ({
    label,
    id,
    options,
    value,
    onChange,
}) => (
    <div className="flex flex-col mb-4">
        <label htmlFor={id} className="font-semibold text-left mb-2 mt-1">
            {label}
        </label>
        <select
            id={id}
            value={value}
            onChange={onChange}
            className="border rounded p-2"
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            ))}
        </select>
    </div>
);
export default SelectField;
