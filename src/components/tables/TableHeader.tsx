import React from "react";
import { Employee } from "../../redux/store/employeeSlice";

/**
 * Propriétés du composant TableHeader.
 * @interface TableHeaderProps
 * @property {keyof Employee | null} sortColumn - Référence la colonne utilisée pour trier les données du tableau.
 * 
 * - Si une colonne est sélectionnée pour le tri, `sortColumn` contient son nom (ex. `"firstName"`, `"city"`, etc.).
 * - Si aucune colonne n'est triée ou s'il n'y a aucune donnée à afficher, sa valeur est `null`.
 * - Lorsqu'un utilisateur clique sur l'en-tête d'une colonne :
 *   - `sortColumn` est mis à jour avec cette colonne.
 *   - Si elle était déjà triée, l'ordre (`sortOrder`) est inversé (`"asc"` ↔ `"desc"`).
 *   - Si c'est une nouvelle colonne, le tri commence en mode `"asc"`.
 * - Utilisé pour afficher dynamiquement l'indicateur de tri (flèche ▲ ou ▼) via des classes CSS.
 * 
 * @property {"asc" | "desc"} sortOrder - L'ordre de tri actuel : `"asc"` pour ascendant, `"desc"` pour descendant.
 * @property {Function} onSort - Fonction déclenchée au clic sur un en-tête de colonne pour trier les données.
 */
interface TableHeaderProps {
    sortColumn: keyof Employee | null;
    sortOrder: "asc" | "desc";
    onSort: (column: keyof Employee) => void;
}

/**
 * Liste des colonnes du tableau avec leurs intitulés affichés à l'utilisateur.
 * @type {Record<keyof Employee, string>}
 */
const columnHeaders: Record<keyof Employee, string> = {
    firstName: "First Name",
    lastName: "Last Name",
    dateOfBirth: "Date of Birth",
    street: "Street",
    zipCode: "Zip Code",
    city: "City",
    state: "State",
    department: "Department",
    startDate: "Start Date",
};

/**
 * Composant affichant l'en-tête du tableau des employés, permettant de trier les colonnes.
 *
 * Chaque en-tête est cliquable et permet de trier les données du tableau par la colonne correspondante.
 * Si la colonne est déjà triée, un second clic inversera l'ordre du tri.
 *
 * @param {TableHeaderProps} props - Les propriétés du composant.
 * @returns {JSX.Element} - Un élément <thead> contenant les colonnes et les indicateurs de tri.
 */
const TableHeader: React.FC<TableHeaderProps> = ({
    sortColumn,
    sortOrder,
    onSort,
}) => {
    return (
        <thead>
            <tr className="table-header-row">
                {Object.keys(columnHeaders).map((column) => (
                    <th
                        key={column}
                        className="table-header-cell"
                        onClick={() => onSort(column as keyof Employee)}
                        tabIndex={0}
                        onKeyDown={() => onSort(column as keyof Employee)}
                    >
                        <div className="table-header-content">
                            <span className="column-name">
                                {columnHeaders[column as keyof Employee]}
                            </span>
                            <div className="sort-indicator">
                                <span
                                    className={`sort-icon ${
                                        sortColumn === column &&
                                        sortOrder === "asc"
                                            ? "sort-asc"
                                            : "sort-inactive"
                                    }`}
                                >
                                    ▲
                                </span>
                                <span
                                    className={`sort-icon ${
                                        sortColumn === column &&
                                        sortOrder === "desc"
                                            ? "sort-desc"
                                            : "sort-inactive"
                                    }`}
                                >
                                    ▼
                                </span>
                            </div>
                        </div>
                    </th>
                ))}
            </tr>
        </thead>
    );
};

export default TableHeader;
