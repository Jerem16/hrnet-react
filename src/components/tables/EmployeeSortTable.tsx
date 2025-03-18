import React, { useState, useEffect } from "react";
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
import Modal from "react-modal-component-by-jeremy";

const EmployeeSortTable: React.FC = () => {
    const employeesFromState: Employee[] = useSelector(
        (state: RootState) => state.employees
    );
    const employees: Employee[] =
        employeesFromState.length > 0 ? employeesFromState : Employees;
    const [isModalOpen, setIsModalOpen] = useState<boolean>(true);

    const [searchTerm, setSearchTerm] = useState<string>("");
    const [itemsPerPage, setItemsPerPage] = useState<number>(10);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [sortColumn, setSortColumn] = useState<keyof Employee | null>(null);
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

    const sortedEmployees: Employee[] = sortEmployees(
        employees,
        sortColumn,
        sortOrder
    );
    const filteredEmployees: Employee[] = filterEmployees(
        sortedEmployees,
        searchTerm
    );
    const paginatedEmployees: Employee[] = paginateEmployees(
        filteredEmployees,
        currentPage,
        itemsPerPage
    );
    const totalPages: number = getTotalPages(filteredEmployees, itemsPerPage);

    useEffect(() => {
        if (filteredEmployees.length <= itemsPerPage) {
            setCurrentPage(1);
        }
    }, [itemsPerPage, filteredEmployees.length]);

    return (
        <main className="main-container">
            <h2 className="main-heading">Current Employees</h2>
            <div className="bg">
                <SearchAndFilter
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    itemsPerPage={itemsPerPage}
                    setItemsPerPage={setItemsPerPage}
                />
                {employees.length === 0 ? (
                    <>
                        <Modal
                            isOpen={isModalOpen}
                            onClose={() => setIsModalOpen(false)}
                            title="Sorry"
                            type="info"
                        >
                            <p>No employees added yet.</p>
                        </Modal>
                        <p className="empty-message">No employees added yet.</p>
                    </>
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
            </div>
        </main>
    );
};

export default EmployeeSortTable;
