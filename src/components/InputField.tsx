import React from "react";
import { InputFieldProps } from "../interface";

const InputField: React.FC<InputFieldProps> = ({
    label,
    id,
    type = "text",
    value,
    onChange,
}) => (
    <div className="flex flex-col mb-4">
        <label htmlFor={id} className="font-semibold text-left mb-2 mt-1" >
            {label}
        </label>
        <input
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            className="border rounded p-2"
        />
    </div>
);

export default InputField;
