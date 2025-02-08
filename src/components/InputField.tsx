import React from "react";

const InputField = ({ label, id, type = "text", value, onChange }) => (
    <div className="flex flex-col mb-4">
        <label htmlFor={id} className="font-semibold">
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
