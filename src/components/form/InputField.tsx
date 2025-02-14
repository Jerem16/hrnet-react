import React from "react";
import { InputFieldProps } from "../../interface";

const FIELD_TYPES = {
    TEXT: "text",
    NUMBER: "number",
};

const InputField: React.FC<InputFieldProps & { error?: string }> = ({
    label,
    id,
    type = FIELD_TYPES.TEXT,
    value,
    onChange,
    error,
}) => {
    const isValid = error === ""; // Valide si pas d'erreur

    return (
        <div className="flex flex-col mb-4">
            <label htmlFor={id} className="font-semibold text-left mb-2">
                {label} {error && <span className="text-red-500">*</span>}
            </label>
            <input
                type={type}
                id={id}
                value={value}
                onChange={onChange}
                autoComplete="on"
                className={`w-full p-2 border rounded ${
                    isValid ? "border-green-500" : ""
                } ${error ? "border-red-500" : ""}`}
            />
            {error && (
                <p className="text-red-500 text-sm mt-1 text-left">{error}</p>
            )}
        </div>
    );
};

export default InputField;
