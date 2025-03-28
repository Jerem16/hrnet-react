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
            <td className="table-cell">{employee.firstName}</td>
            <td className="table-cell">{employee.lastName}</td>
            <td className="table-cell">{formatDate(employee.dateOfBirth)}</td>
            <td className="table-cell">{employee.street}</td>
            <td className="table-cell">{employee.zipCode}</td>
            <td className="table-cell">{employee.city}</td>
            <td className="table-cell">{employee.state}</td>
            <td className="table-cell">{employee.department}</td>
            <td className="table-cell">{formatDate(employee.startDate)}</td>
        </tr>
    );
};

export default TableRow;
