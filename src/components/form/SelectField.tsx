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
}) => {
    const isValid = error === "";
    return (
        <div className="field-container">
            <label htmlFor={id} className="field-label">
                {label} {error && <span className="error-indicator">*</span>}
            </label>
            <select
                id={id}
                value={value || ""}
                onChange={onChange}
                className={`select-field ${isValid ? "ok" : ""} ${
                    error ? "error" : ""
                }`}
            >
                {placeholder && <option value="">{placeholder}</option>}
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                ))}
            </select>
            {error && <p className="select-field-error">{error}</p>}
        </div>
    );
};
export default SelectField;
