import React from "react";
import { SelectFieldProps } from "../../interface";

/**
 * Composant SelectField
 * Ce composant représente un champ de sélection (dropdown) réutilisable avec gestion des erreurs et d'un placeholder optionnel.
 *
 * @param {string} label - Libellé du champ
 * @param {string} id - Identifiant unique pour l'élément select
 * @param {Array} options - Liste des options disponibles, sous forme d'objets { value, name }
 * @param {string} [value] - Valeur actuellement sélectionnée
 * @param {function} onChange - Fonction appelée lorsqu'une option est sélectionnée
 * @param {string} [error] - Message d'erreur associé au champ
 * @param {string} [placeholder] - Texte affiché par défaut avant sélection
 */
const SelectField: React.FC<SelectFieldProps & { error?: string }> = ({
    label,
    id,
    options,
    value,
    onChange,
    error,
    placeholder, // Ajout de la prop placeholder
}) => {
    // Vérifie si le champ est valide (aucune erreur)
    const isValid = error === "";

    return (
        <div className="field-container">
            {/* Label du champ avec indicateur visuel en cas d'erreur */}
            <label htmlFor={id} className="field-label">
                {label} {error && <span className="error-indicator">*</span>}
            </label>

            {/* Menu déroulant avec gestion du placeholder et des erreurs */}
            <select
                id={id}
                value={value || ""} // Assure une valeur par défaut pour éviter les erreurs
                onChange={onChange}
                className={`select-field ${isValid ? "ok" : ""} ${
                    error ? "error" : ""
                }`}
            >
                {/* Ajoute une option placeholder si définie */}
                {placeholder && <option value="">{placeholder}</option>}

                {/* Génère dynamiquement les options à partir du tableau fourni */}
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                ))}
            </select>

            {/* Affichage du message d'erreur si nécessaire */}
            {error && <p className="select-field-error">{error}</p>}
        </div>
    );
};

export default SelectField;
