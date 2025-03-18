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

// Définition des erreurs sous forme d'objet dynamique
interface FormErrors {
    [key: string]: string;
}

// Composant EmployeeForm
const EmployeeForm: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [errors, setErrors] = useState<FormErrors>({});
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const dispatch = useDispatch();

    // Gestion des changements dans les champs du formulaire
    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });

        let error: string = validateEachInput(e, formData);
        setErrors({ ...errors, [id]: error });
    };

    // Gestion de la soumission du formulaire
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationErrors: FormErrors = validateForm(formData);
        setErrors(validationErrors);

        if (Object.values(validationErrors).some((error) => error !== ""))
            return;

        const formattedData: Employee = {
            ...formData,
            firstName: capitalizeText(formData.firstName),
            lastName: capitalizeText(formData.lastName),
            street: capitalizeText(formData.street),
            city: capitalizeText(formData.city),
        };

        dispatch(addEmployee(formattedData));
        setIsModalOpen(true);
        setFormData(initialFormData);
        setErrors({});
    };

    return (
        <main className="main-container">
            <h2 className="main-heading">Create Employee</h2>
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
                    formData={formData}
                    department={formData.department}
                    error={errors.department}
                    errors={errors}
                    onChange={handleChange}
                />

                <button type="submit" className="button-primary">
                    Save
                </button>
            </form>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Succès"
                type="success"
            >
                <p>L’employé a été ajouté avec succès.</p>
            </Modal>
        </main>
    );
};

export default EmployeeForm;
