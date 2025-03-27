import React from "react";
import { InputFieldProps } from "../../interface";
import IcoInfoSvg from "./Info";

// Définition des types de champ possibles
const FIELD_TYPES = {
    TEXT: "text",
    NUMBER: "number",
};

/**
 * Composant InputField
 * Ce composant représente un champ de saisie réutilisable avec gestion des erreurs et désactivation conditionnelle.
 *
 * @param {string} label - Libellé du champ
 * @param {string} id - Identifiant unique pour l'input
 * @param {string} [type] - Type de l'input (text ou number), par défaut "text"
 * @param {string} value - Valeur actuelle du champ
 * @param {function} onChange - Fonction appelée lors d'un changement de valeur
 * @param {string} [error] - Message d'erreur associé au champ
 * @param {boolean} [disabled] - Indique si le champ est désactivé
 */
const InputField: React.FC<InputFieldProps & { error?: string }> = ({
    label,
    id,
    type = FIELD_TYPES.TEXT,
    value,
    onChange,
    error,
    disabled,
}) => {
    // Vérifie si le champ est valide (aucune erreur)
    const isValid = error === "";

    return (
        <div className="field-container">
            {/* Label du champ, avec gestion des styles selon l'état */}
            <label
                htmlFor={id}
                className={`field-label ${disabled ? "disabled" : ""}`}
            >
                {/* Affiche un message d'information si le champ est désactivé et vide */}
                {disabled && !value && (
                    <div className="info">
                        <p className="input-field-disabled">
                            <IcoInfoSvg className="info-icon" />
                            Avant de remplir ce champ, vous devez indiquer la
                            date de naissance.
                        </p>
                    </div>
                )}
                {label} {/* Ajoute un indicateur visuel en cas d'erreur */}
                {error && <span className="error-indicator">*</span>}
            </label>

            {/* Champ de saisie avec styles dynamiques en fonction des erreurs et de l'état désactivé */}
            <input
                type={type}
                id={id}
                value={value}
                onChange={onChange}
                autoComplete="on"
                disabled={disabled}
                className={`input-field ${isValid ? "valid" : ""} ${
                    disabled ? "disabled" : ""
                } ${error ? "error" : ""}`}
            />

            {/* Message d'erreur affiché si une erreur est présente */}
            {error && <p className="input-field-error">{error}</p>}
        </div>
    );
};

export default InputField;
