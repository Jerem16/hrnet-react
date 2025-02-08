import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    startDate: string;
    street: string;
    city: string;
    state: string;
    zipCode: string;
    department: string;
}

interface InputFieldProps {
    label: string;
    id: keyof FormData;
    type?: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

interface SelectFieldProps {
    label: string;
    id: keyof FormData;
    options: string[];
    value: string;
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
    label,
    id,
    type = "text",
    value,
    onChange,
}) => (
    <div className="flex flex-col mb-4">
        <label htmlFor={id} className="font-semibold">
            {label}
        </label>
        <input
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            className="border rounded p-2"
        />
    </div>
);

const SelectField: React.FC<SelectFieldProps> = ({
    label,
    id,
    options,
    value,
    onChange,
}) => (
    <div className="flex flex-col mb-4">
        <label htmlFor={id} className="font-semibold">
            {label}
        </label>
        <select
            id={id}
            value={value}
            onChange={onChange}
            className="border rounded p-2"
        >
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
);

const EmployeeForm: React.FC = () => {
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

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log("Employee Data:", formData);
    };

    return (
        <div className="container mx-auto p-4 max-w-lg border rounded shadow-md">
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
                        options={["AL", "AK", "AZ", "CA", "NY"]}
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
                    options={[
                        "Sales",
                        "Marketing",
                        "Engineering",
                        "HR",
                        "Legal",
                    ]}
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
        </div>
    );
};

export default EmployeeForm;
