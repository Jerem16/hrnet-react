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
