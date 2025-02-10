import React, { useState, ChangeEvent, FormEvent } from "react";
import { FormData } from "../../interface";
import InputField from "./InputField";
import SelectField from "./SelectField";
import { states, departments } from "../../assets/data/dataOptions";
//? REDUX */
import { useDispatch } from "react-redux";
import { addEmployee, Employee } from "../../redux/store/employeeSlice";
import {
    validateName,
    validateBirthDate,
    validateZipCode,
    isNotEmpty,
    validateStartDate,
} from "../../utils/validationForm";

const EmployeeForm: React.FC = () => {
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const dispatch = useDispatch();
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        startDate: "",
        street: "",
        city: "",
        state: "",
        zipCode: "",
        department: "",
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
        let validationErrors: { [key: string]: string } = {};

        // Vérifications
        validationErrors.firstName =
            isNotEmpty(formData.firstName, "Prénom") ||
            validateName(formData.firstName);
        validationErrors.lastName =
            isNotEmpty(formData.lastName, "Nom") ||
            validateName(formData.lastName);
        validationErrors.dateOfBirth =
            isNotEmpty(formData.dateOfBirth, "Date de naissance") ||
            validateBirthDate(formData.dateOfBirth);
        validationErrors.startDate =
            isNotEmpty(formData.startDate, "Date de début") ||
            validateStartDate(formData.startDate, formData.dateOfBirth);
        validationErrors.street = isNotEmpty(formData.street, "Rue");
        validationErrors.city =
            isNotEmpty(formData.city, "Ville") || validateName(formData.city);
        validationErrors.state = isNotEmpty(formData.state, "État");
        validationErrors.zipCode =
            isNotEmpty(formData.zipCode, "Code postal") ||
            validateZipCode(formData.zipCode);
        validationErrors.department = isNotEmpty(
            formData.department,
            "Département"
        );

        setErrors(validationErrors);

        // Vérifie s'il y a des erreurs
        if (Object.values(validationErrors).some((error) => error !== "")) {
            return;
        }

        // Formatage des données avant envoi
        const formattedData = {
            ...formData,
            firstName: capitalizeText(formData.firstName),
            lastName: capitalizeText(formData.lastName),
            city: capitalizeText(formData.city),
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
                    error={errors.firstName}
                />
                <InputField
                    label="Last Name"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    error={errors.lastName}
                />
                <InputField
                    label="Date of Birth"
                    id="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    error={errors.dateOfBirth}
                />
                <InputField
                    label="Start Date"
                    id="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={handleChange}
                    error={errors.startDate}
                />

                <fieldset className="border p-4 rounded mb-4">
                    <legend className="font-semibold">Address</legend>
                    <InputField
                        label="Street"
                        id="street"
                        value={formData.street}
                        onChange={handleChange}
                        error={errors.street}
                    />
                    <InputField
                        label="City"
                        id="city"
                        value={formData.city}
                        onChange={handleChange}
                        error={errors.city}
                    />
                    <SelectField
                        label="State"
                        id="state"
                        placeholder="--"
                        options={states.map(({ name, abbreviation }) => ({
                            name,
                            value: abbreviation,
                        }))}
                        value={formData.state}
                        onChange={handleChange}
                        error={errors.state}
                    />
                    <InputField
                        label="Zip Code"
                        id="zipCode"
                        type="number"
                        value={formData.zipCode}
                        onChange={handleChange}
                        error={errors.zipCode}
                    />
                </fieldset>

                <SelectField
                    label="Department"
                    id="department"
                    placeholder="--"
                    options={departments.map(({ name }) => ({
                        name,
                        value: name,
                    }))}
                    value={formData.department}
                    onChange={handleChange}
                    error={errors.department}
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
