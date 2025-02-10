import React from "react";
import { SelectFieldProps } from "../../interface";

const SelectField: React.FC<SelectFieldProps & { error?: string }> = ({
    label,
    id,
    options,
    value,
    onChange,
    error,
    placeholder, // Ajout de la prop placeholder
}) => (
    <div className="flex flex-col mb-4">
        <label htmlFor={id} className="font-semibold text-left mb-2 mt-1">
            {label} {error && <span className="text-red-500">*</span>}
        </label>
        <select
            id={id}
            value={value || ""}
            onChange={onChange}
            className={`border rounded p-2 ${error ? "border-red-500" : ""}`}
        >
            {placeholder && <option value="">{placeholder}</option>}{" "}
            {/* Suppression de `selected` */}
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            ))}
        </select>
        {error && (
            <p className="text-red-500 text-sm mt-1 text-left">{error}</p>
        )}
    </div>
);

export default SelectField;
