import React from "react";
import { InputFieldProps } from "../../interface";
import InfoSvg from "./Info";
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
    disabled,
}) => {
    const isValid = error === "";

    return (
        <div className="field-container">
            <label
                htmlFor={id}
                className={`field-label ${disabled ? "disabled" : ""}`}
            >
                {disabled && !value && (
                    <div className="info">
                        <p className="input-field-disabled">
                            <InfoSvg className="info-icon" />
                            Avant de remplir ce champ, vous devez indiquer la
                            date de naissance.
                        </p>
                    </div>
                )}
                {label} {error && <span className="error-indicator">*</span>}{" "}
            </label>
            <input
                type={type}
                id={id}
                value={value}
                onChange={onChange}
                autoComplete="on"
                disabled={disabled}
                className={`input-field ${isValid ? "valid" : ""}  ${
                    disabled ? "disabled" : ""
                } ${error ? "error" : ""}`}
            />
            {error && <p className="input-field-error">{error}</p>}
        </div>
    );
};

export default InputField;
