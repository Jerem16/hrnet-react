import React from "react";
import { Employee } from "../../redux/store/employeeSlice";

interface TableHeaderProps {
    sortColumn: keyof Employee | null;
    sortOrder: "asc" | "desc";
    onSort: (column: keyof Employee) => void;
}

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

const TableHeader: React.FC<TableHeaderProps> = ({
    sortColumn,
    sortOrder,
    onSort,
}) => {
    return (
        <thead>
            <tr className="bg-gray-300 text-gray-700 text-sm">
                {Object.keys(columnHeaders).map((column) => (
                    <th
                        key={column}
                        className="border p-2 text-left cursor-pointer hover:bg-gray-200"
                        onClick={() => onSort(column as keyof Employee)}
                    >
                        <div className="flex justify-between items-center gap-2">
                            <span className="text-gray-800">
                                {columnHeaders[column as keyof Employee]}
                            </span>
                            <div className="flex flex-col leading-none">
                                <span
                                    className={`text-xs ${
                                        sortColumn === column &&
                                        sortOrder === "asc"
                                            ? "text-black font-bold"
                                            : "text-gray-500"
                                    }`}
                                >
                                    ▲
                                </span>
                                <span
                                    className={`text-xs ${
                                        sortColumn === column &&
                                        sortOrder === "desc"
                                            ? "text-black font-bold"
                                            : "text-gray-500"
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
