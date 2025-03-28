import React from "react";
import { Employee } from "../../redux/store/employeeSlice";
import { formatDate } from "./utils/employees";

/**
 * Propriétés de la ligne du tableau affichant les informations d'un employé.
 * @interface TableRowProps
 * @property {Employee} employee - L'objet représentant l'employé à afficher dans la ligne du tableau.
 */
interface TableRowProps {
    employee: Employee;
}

/**
 * Composant représentant la ou les lignes du tableau affichant les informations d'un employé.
 *
 * @param {TableRowProps} props - Les propriétés du composant.
 * @returns {JSX.Element} - La ligne du tableau affichant les données de l'employé.
 */
const TableRow: React.FC<TableRowProps> = ({ employee }) => {
    return (
        <tr className="table-row">
            <td className="table-cell">
                <span>{employee.firstName}</span>
            </td>
            <td className="table-cell">
                <span>{employee.lastName}</span>
            </td>
            <td className="table-cell">
                <span>{formatDate(employee.dateOfBirth)}</span>
            </td>
            <td className="table-cell">
                <span className="street">{employee.street}</span>
            </td>
            <td className="table-cell">
                <span>{employee.zipCode}</span>
            </td>
            <td className="table-cell">
                <span>{employee.city}</span>
            </td>
            <td className="table-cell">
                <span>{employee.state}</span>
            </td>
            <td className="table-cell">
                <span>{employee.department}</span>
            </td>
            <td className="table-cell">
                <span>{formatDate(employee.startDate)}</span>
            </td>
        </tr>
    );
};

export default TableRow;
