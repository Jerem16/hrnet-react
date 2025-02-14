import React, { useState, ChangeEvent, FormEvent } from "react";
import PersonalInfoForm from "./fieldset/PersonalInfoForm";
import AddressForm from "./fieldset/AddressForm";
import DepartmentForm from "./fieldset/DepartmentForm";
import {
    initialFormData,
    validateForm,
    validateEachInput,
    capitalizeText,
} from "./utils/validateForm";
import { FormData } from "../../interface";
//? REDUX */
import { useDispatch } from "react-redux";
import { addEmployee, Employee } from "../../redux/store/employeeSlice";
//? NPM MODAL */
import Modal from "react-modal-component-by-jeremy";

const EmployeeForm: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const dispatch = useDispatch();

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });

        let error = validateEachInput(e, formData);

        setErrors({ ...errors, [id]: error });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const validationErrors = validateForm(formData);
        setErrors(validationErrors);

        if (Object.values(validationErrors).some((error) => error !== ""))
            return;

        const formattedData = {
            ...formData,
            firstName: capitalizeText(formData.firstName),
            lastName: capitalizeText(formData.lastName),
            street: capitalizeText(formData.street),
            city: capitalizeText(formData.city),
        };

        dispatch(addEmployee(formattedData as Employee));
        setIsModalOpen(true);
        setFormData(initialFormData);
        setErrors({});
    };
    return (
        <main className="container mx-auto p-4 max-w-lg border rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">Create Employee</h2>
            <form onSubmit={handleSubmit}>
                <PersonalInfoForm
                    formData={formData}
                    errors={errors}
                    onChange={handleChange}
                />
                <AddressForm
                    formData={formData}
                    errors={errors}
                    onChange={handleChange}
                />
                <DepartmentForm
                    department={formData.department}
                    error={errors.department}
                    onChange={handleChange}
                />

                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Save
                </button>
            </form>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Succès"
                type="info"
                // Type de modale ("success", "error", "info").
            >
                <p>L’employé a été ajouté avec succès.</p>
            </Modal>
        </main>
    );
};

export default EmployeeForm;
