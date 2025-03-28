import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import { Employee } from "../../redux/store/employeeSlice";

// Définition des propriétés attendues par le composant EmployeeTable
interface EmployeeTableProps {
    employees: Employee[]; // Liste des employés à afficher dans le tableau
    sortColumn: keyof Employee | null; // Colonne actuellement utilisée pour le tri
    sortOrder: "asc" | "desc"; // Ordre de tri actuel (ascendant ou descendant)
    setSortColumn: React.Dispatch<React.SetStateAction<keyof Employee | null>>; // Fonction pour mettre à jour la colonne de tri
    setSortOrder: React.Dispatch<React.SetStateAction<"asc" | "desc">>; // Fonction pour mettre à jour l'ordre de tri
}

/**
 * Composant affichant une liste d'employés sous forme de tableau.
 * Il permet de trier les employés en cliquant sur les en-têtes de colonne.
 */
const EmployeeTable: React.FC<EmployeeTableProps> = ({
    employees,
    sortColumn,
    sortOrder,
    setSortColumn,
    setSortOrder,
}) => {
    /**
     * Gère le tri des employés en fonction de la colonne sélectionnée.
     * Si la colonne cliquée est déjà la colonne de tri, on inverse l'ordre.
     * Sinon, on sélectionne la nouvelle colonne et on applique un tri ascendant.
     */
    const handleSort = (column: keyof Employee) => {
        if (sortColumn === column) {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        } else {
            setSortColumn(column);
            setSortOrder("asc");
        }
    };

    return (
        <div className="table-container">
            <table className="employee-table">
                {/* En-tête du tableau, permettant le tri */}
                <TableHeader
                    sortColumn={sortColumn}
                    sortOrder={sortOrder}
                    onSort={handleSort}
                />
                <tbody>
                    {/* Affichage des employés sous forme de lignes */}
                    {employees.map((employee, index) => (
                        <TableRow
                            key={index + "TableRow"} // Clé unique pour chaque ligne
                            employee={employee}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeTable;
