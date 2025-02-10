import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Employee } from "../redux/store/employeeSlice";

// import { employees as Employees } from "../assets/data/employees";

const EmployeeList: React.FC = () => {
    const employees = useSelector((state: RootState) => state.employees);

    // const employees = Employees;

    return (
        <main className="mx-auto p-4 max-w-7xl border rounded shadow-md overflow-x-auto">
            <h2 className="text-xl font-bold mb-4 text-center">
                Current Employees
            </h2>

            {employees.length === 0 ? (
                <p className="text-center text-gray-600">
                    No employees added yet.
                </p>
            ) : (
                <fieldset className="border p-4 rounded">
                    <legend className="font-semibold">Employee Details</legend>

                    <div className="overflow-x-auto">
                        <table className="min-w-[1000px] w-full border-collapse border border-gray-300 mt-2">
                            <thead>
                                <tr className="bg-gray-100 text-gray-700 text-sm">
                                    <th className="border p-2 text-left">
                                        First Name
                                    </th>
                                    <th className="border p-2 text-left">
                                        Last Name
                                    </th>
                                    <th className="border p-2 text-left">
                                        Start Date
                                    </th>
                                    <th className="border p-2 text-left">
                                        Department
                                    </th>
                                    <th className="border p-2 text-left">
                                        Date of Birth
                                    </th>
                                    <th className="border p-2 text-left">
                                        Street
                                    </th>
                                    <th className="border p-2 text-left">
                                        City
                                    </th>
                                    <th className="border p-2 text-left">
                                        State
                                    </th>
                                    <th className="border p-2 text-left">
                                        Zip Code
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {employees.map(
                                    (employee: Employee, index: number) => (
                                        <tr
                                            key={index + "EmployeeList"}
                                            className="border-b hover:bg-gray-50"
                                        >
                                            <td className="border p-2 whitespace-nowrap">
                                                {employee.firstName}
                                            </td>
                                            <td className="border p-2 whitespace-nowrap">
                                                {employee.lastName}
                                            </td>
                                            <td className="border p-2 whitespace-nowrap">
                                                {employee.startDate}
                                            </td>
                                            <td className="border p-2 whitespace-nowrap">
                                                {employee.department}
                                            </td>
                                            <td className="border p-2 whitespace-nowrap">
                                                {employee.dateOfBirth}
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
        </main>
    );
};

export default EmployeeList;
