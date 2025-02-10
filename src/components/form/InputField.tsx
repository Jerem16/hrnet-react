import React from "react";
import { InputFieldProps } from "../../interface";

const InputField: React.FC<InputFieldProps & { error?: string }> = ({
    label,
    id,
    type = "text",
    value,
    onChange,
    error,
}) => (
    <div className="flex flex-col mb-4">
        <label htmlFor={id} className="font-semibold text-left mb-2">
            {label} {error && <span className="text-red-500">*</span>}
        </label>
        <input
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            className={`border rounded p-2 ${error ? "border-red-500" : ""}`}
        />
        {error && (
            <p className="text-red-500 text-sm mt-1 text-left">{error}</p>
        )}
    </div>
);

export default InputField;
