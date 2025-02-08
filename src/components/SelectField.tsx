import React from "react";

const SelectField = ({ label, id, options, value, onChange }) => (
    <div className="flex flex-col mb-4">
        <label htmlFor={id} className="font-semibold">
            {label}
        </label>
        <select
            id={id}
            value={value}
            onChange={onChange}
            className="border rounded p-2"
        >
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
);

export default SelectField;
