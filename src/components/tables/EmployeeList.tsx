import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Employee } from "../../redux/store/employeeSlice";
import SearchAndFilter from "./SearchAndFilter";
import EmployeeTable from "./EmployeeTable";
import Pagination from "./Pagination";
import { employees as Employees } from "../../assets/data/employees";
import {
    sortEmployees,
    filterEmployees,
    paginateEmployees,
    getTotalPages,
} from "./utils/employees";

const EmployeeList: React.FC = () => {
    // const employees = useSelector((state: RootState) => state.employees);
    const employees = Employees;

    const [searchTerm, setSearchTerm] = useState("");
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortColumn, setSortColumn] = useState<keyof Employee | null>(null);
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

    const sortedEmployees = sortEmployees(employees, sortColumn, sortOrder);
    const filteredEmployees = filterEmployees(sortedEmployees, searchTerm);
    const paginatedEmployees = paginateEmployees(
        filteredEmployees,
        currentPage,
        itemsPerPage
    );
    const totalPages = getTotalPages(filteredEmployees, itemsPerPage);

    return (
        <main className="mx-auto p-4 max-w-7xl rounded shadow-md overflow-x-auto bg-gray-800">
            <h2 className="text-xl font-bold mb-4 text-center">
                Current Employees
            </h2>
            <SearchAndFilter
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                itemsPerPage={itemsPerPage}
                setItemsPerPage={setItemsPerPage}
            />
            {employees.length === 0 ? (
                <p className="text-center text-gray-600">
                    No employees added yet.
                </p>
            ) : (
                <EmployeeTable
                    employees={paginatedEmployees}
                    sortColumn={sortColumn}
                    sortOrder={sortOrder}
                    setSortColumn={setSortColumn}
                    setSortOrder={setSortOrder}
                />
            )}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </main>
    );
};

export default EmployeeList;
