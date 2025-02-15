import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import { Employee } from "../../redux/store/employeeSlice";

interface EmployeeTableProps {
    employees: Employee[];
    sortColumn: keyof Employee | null;
    sortOrder: "asc" | "desc";
    setSortColumn: React.Dispatch<React.SetStateAction<keyof Employee | null>>;
    setSortOrder: React.Dispatch<React.SetStateAction<"asc" | "desc">>;
}

const EmployeeTable: React.FC<EmployeeTableProps> = ({
    employees,
    sortColumn,
    sortOrder,
    setSortColumn,
    setSortOrder,
}) => {
    const handleSort = (column: keyof Employee) => {
        if (sortColumn === column) {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        } else {
            setSortColumn(column);
            setSortOrder("asc");
        }
    };

    return (
        <div className="overflow-x-auto">
            <table className="min-w-[1080px] w-full border-collapse border border-gray-300 mt-2">
                <TableHeader
                    sortColumn={sortColumn}
                    sortOrder={sortOrder}
                    onSort={handleSort}
                />
                <tbody>
                    {employees.map((employee, index) => (
                        <TableRow
                            key={index + "TableRow"}
                            employee={employee}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeTable;
