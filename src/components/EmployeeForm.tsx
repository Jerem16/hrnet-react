import React, { useState, ChangeEvent, FormEvent } from "react";
import { FormData } from "../interface";
import InputField from "./InputField";
import SelectField from "./SelectField";
import { states, departments } from "../assets/data/dataOptions";
//? REDUX */
import { useDispatch } from "react-redux";
import { addEmployee, Employee } from "../redux/store/employeeSlice"; // ✅ Correct

const EmployeeForm: React.FC = () => {
    
    const dispatch = useDispatch();
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        startDate: "",
        street: "",
        city: "",
        state: "AL",
        zipCode: "",
        department: "Sales",
    });

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };
    const capitalizeText = (text: string): string => {
        return text
            .toLowerCase() // Convertit tout en minuscules pour éviter les soucis
            .split(" ") // Sépare chaque mot
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Met en majuscule la première lettre
            .join(" "); // Reforme la phrase
    };
    const formatDate = (dateStr: string): string => {
        const [year, month, day] = dateStr.split("-");
        return `${month}/${day}/${year}`; // Convertit YYYY-MM-DD en MM/DD/YYYY
    };
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const formattedData = {
            ...formData,
            firstName: capitalizeText(formData.firstName),
            lastName: capitalizeText(formData.lastName),
            city: capitalizeText(formData.city),
            // dateOfBirth: formatDate(formData.dateOfBirth),
            // startDate: formatDate(formData.startDate),
        };
        dispatch(addEmployee(formattedData as Employee));
        console.log("Employee Data:", formattedData);
    };

    return (
        <main className="container mx-auto p-4 max-w-lg border rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">Create Employee</h2>
            <form onSubmit={handleSubmit}>
                <InputField
                    label="First Name"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                />
                <InputField
                    label="Last Name"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                />
                <InputField
                    label="Date of Birth"
                    id="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                />
                <InputField
                    label="Start Date"
                    id="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={handleChange}
                />

                <fieldset className="border p-4 rounded mb-4">
                    <legend className="font-semibold">Address</legend>
                    <InputField
                        label="Street"
                        id="street"
                        value={formData.street}
                        onChange={handleChange}
                    />
                    <InputField
                        label="City"
                        id="city"
                        value={formData.city}
                        onChange={handleChange}
                    />
                    <SelectField
                        label="State"
                        id="state"
                        options={states.map(({ name, abbreviation }) => ({
                            name,
                            value: abbreviation,
                            abbreviation,
                        }))}
                        value={formData.state}
                        onChange={handleChange}
                    />
                    <InputField
                        label="Zip Code"
                        id="zipCode"
                        type="number"
                        value={formData.zipCode}
                        onChange={handleChange}
                    />
                </fieldset>

                <SelectField
                    label="Department"
                    id="department"
                    options={departments.map(({ name }) => ({
                        name,
                        value: name,
                    }))}
                    value={formData.department}
                    onChange={handleChange}
                />

                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Save
                </button>
            </form>
        </main>
    );
};

export default EmployeeForm;
