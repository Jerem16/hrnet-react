import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Employee } from "../../../redux/store/employeeSlice";
// import { employees as Employees } from "../../assets/data/employees";

const EmployeeList: React.FC = () => {
    const employees = useSelector((state: RootState) => state.employees);
    // const employees = Employees;
    const [searchTerm, setSearchTerm] = useState("");
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    // État pour gérer le tri
    const [sortColumn, setSortColumn] = useState<keyof Employee | null>(null);
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
    const parseDate = (dateStr: string): Date | null => {
        const date = new Date(dateStr);
        return isNaN(date.getTime()) ? null : date;
    };

    // Fonction de tri dynamique
    const sortedEmployees = [...employees].sort((a, b) => {
        if (!sortColumn) return 0;

        let valueA = a[sortColumn];
        let valueB = b[sortColumn];

        if (sortColumn === "dateOfBirth" || sortColumn === "startDate") {
            const dateA = parseDate(valueA);
            const dateB = parseDate(valueB);

            if (!dateA || !dateB) return 0; // Si une date est invalide, ne pas trier
            return sortOrder === "asc"
                ? dateA.getTime() - dateB.getTime()
                : dateB.getTime() - dateA.getTime();
        }

        valueA = valueA.toLowerCase();
        valueB = valueB.toLowerCase();

        if (valueA < valueB) return sortOrder === "asc" ? -1 : 1;
        if (valueA > valueB) return sortOrder === "asc" ? 1 : -1;
        return 0;
    });

    // Fonction pour gérer le tri au clic
    const handleSort = (column: keyof Employee) => {
        if (sortColumn === column) {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        } else {
            setSortColumn(column);
            setSortOrder("asc");
        }
    };
    const columnHeaders: Record<string, string> = {
        firstName: "First Name",
        lastName: "Last Name",
        startDate: "Start Date",
        department: "Department",
        dateOfBirth: "Date of Birth",
        street: "Street",
        city: "City",
        state: "State",
        zipCode: "Zip Code",
    };

    // Fonction de formatage des dates
    const formatDate = (dateStr: string): string => {
        if (!dateStr) return "";
        const date = new Date(dateStr);
        if (isNaN(date.getTime())) return dateStr;
        return date.toLocaleDateString("fr-FR");
    };

    const filteredEmployees = sortedEmployees.filter((employee) =>
        Object.values(employee).some((value) => {
            if (typeof value === "string") {
                return (
                    value.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    formatDate(value).includes(searchTerm)
                );
            } else if (typeof value === "number") {
                return value.toString().includes(searchTerm);
            }
            return false;
        })
    );

    const paginatedEmployees = filteredEmployees.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const totalPages = Math.ceil(employees.length / itemsPerPage);
    return (
        <main className="mx-auto p-4 max-w-7xl rounded shadow-md overflow-x-auto bg-gray-800">
            <h2 className="text-xl font-bold mb-4 text-center">
                Current Employees
            </h2>
            <div className="mb-4 flex justify-between">
                <label htmlFor="pages-nb-selector">
                    Show:
                    <select
                        id="pages-nb-selector"
                        className="ml-2 border p-1 rounded"
                        value={itemsPerPage}
                        onChange={(e) => {
                            setItemsPerPage(Number(e.target.value));
                            setCurrentPage(1);
                        }}
                    >
                        {[10, 25, 50, 100].map((size) => (
                            <option key={size} value={size}>
                                {size}
                            </option>
                        ))}
                    </select>
                </label>
                <label htmlFor="search-selector">
                    Search:
                    <input
                        id="search-selector"
                        className="ml-2 border p-1 rounded"
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </label>
            </div>
            {employees.length === 0 ? (
                <p className="text-center text-gray-600">
                    No employees added yet.
                </p>
            ) : (
                <fieldset className="border p-4 rounded">
                    <legend className="font-semibold">Employee Details</legend>

                    <div className="overflow-x-auto">
                        <table className="min-w-[1025px] w-full border-collapse border border-gray-300 mt-2">
                            <thead>
                                <tr className="bg-gray-300 text-gray-700 text-sm">
                                    {[
                                        "firstName",
                                        "lastName",
                                        "startDate",
                                        "department",
                                        "dateOfBirth",
                                        "street",
                                        "city",
                                        "state",
                                        "zipCode",
                                    ].map((column) => (
                                        <th
                                            key={column}
                                            className="border p-2 text-left cursor-pointer hover:bg-gray-200"
                                            onClick={() =>
                                                handleSort(
                                                    column as keyof Employee
                                                )
                                            }
                                        >
                                            <div className="flex justify-between items-center gap-2">
                                                <span className="text-gray-800">
                                                    {columnHeaders[column]}
                                                </span>
                                                <div className="flex flex-col leading-none">
                                                    <span
                                                        className={`text-xs ${
                                                            sortColumn ===
                                                                column &&
                                                            sortOrder === "asc"
                                                                ? "text-black font-bold"
                                                                : "text-gray-500"
                                                        }`}
                                                    >
                                                        ▲
                                                    </span>
                                                    <span
                                                        className={`text-xs ${
                                                            sortColumn ===
                                                                column &&
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
                            <tbody>
                                {paginatedEmployees.map(
                                    (employee: Employee, index: number) => (
                                        <tr
                                            key={index + "EmployeeList"}
                                            className={`border-b ${
                                                index % 2 === 0
                                                    ? "bg-gray-100"
                                                    : "bg-gray-800"
                                            } ${
                                                index % 2 === 0
                                                    ? "text-gray-700"
                                                    : "bg-gray-300"
                                            }`}
                                        >
                                            <td className="border p-2 whitespace-nowrap">
                                                {employee.firstName}
                                            </td>
                                            <td className="border p-2 whitespace-nowrap">
                                                {employee.lastName}
                                            </td>
                                            <td className="border p-2 whitespace-nowrap">
                                                {formatDate(employee.startDate)}
                                            </td>
                                            <td className="border p-2 whitespace-nowrap">
                                                {employee.department}
                                            </td>
                                            <td className="border p-2 whitespace-nowrap">
                                                {formatDate(
                                                    employee.dateOfBirth
                                                )}
                                            </td>
                                            <td className="border p-2 whitespace-nowrap">
                                                {employee.street}
                                            </td>
                                            <td className="border p-2 whitespace-nowrap">
                                                {employee.city}
                                            </td>
                                            <td className="border p-2 whitespace-nowrap">
                                                {employee.state}
                                            </td>
                                            <td className="border p-2 whitespace-nowrap">
                                                {employee.zipCode}
                                            </td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                    </div>
                </fieldset>
            )}
            <div className="flex justify-between items-center mt-4">
                <button
                    className="border px-4 py-1 rounded disabled:opacity-50"
                    disabled={currentPage === 1}
                    onClick={() =>
                        setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                >
                    Previous
                </button>
                <span>
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    className="border px-4 py-1 rounded disabled:opacity-50"
                    disabled={currentPage === totalPages}
                    onClick={() =>
                        setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                >
                    Next
                </button>
            </div>
        </main>
    );
};

export default EmployeeList;
