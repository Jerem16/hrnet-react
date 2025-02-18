import React from "react";
import { Employee } from "../../redux/store/employeeSlice";
import { formatDate } from "./utils/employees";
interface TableRowProps {
    employee: Employee;
}

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
