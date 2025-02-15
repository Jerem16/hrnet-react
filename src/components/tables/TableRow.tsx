import React from "react";
import { Employee } from "../../redux/store/employeeSlice";
import { formatDate } from "./utils/employees";
interface TableRowProps {
    employee: Employee;
}

const TableRow: React.FC<TableRowProps> = ({ employee }) => {
    return (
        <tr className="border-b bg-gray-100 text-gray-700 hover:bg-gray-200">
            <td className="border p-2 whitespace-nowrap">
                {employee.firstName}
            </td>
            <td className="border p-2 whitespace-nowrap">
                {employee.lastName}
            </td>
            <td className="border p-2 whitespace-nowrap">
                {formatDate(employee.dateOfBirth)}
            </td>
            <td className="border p-2 whitespace-nowrap">{employee.street}</td>
            <td className="border p-2 whitespace-nowrap">
                {employee.zipCode}
            </td>
            <td className="border p-2 whitespace-nowrap">{employee.city}</td>
            <td className="border p-2 whitespace-nowrap">{employee.state}</td>
            <td className="border p-2 whitespace-nowrap">
                {employee.department}
            </td>
            <td className="border p-2 whitespace-nowrap">
                {formatDate(employee.startDate)}
            </td>
        </tr>
    );
};

export default TableRow;
