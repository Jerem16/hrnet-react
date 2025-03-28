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

/**
 * Interface représentant les erreurs de validation du formulaire.
 */
interface FormErrors {
    [key: string]: string;
}

/**
 * Composant représentant le formulaire de création d'un employé.
 *
 * @returns {JSX.Element} - Le formulaire d'ajout d'un employé.
 */
const EmployeeForm: React.FC = () => {
    /** État de l'affichage du modal */
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    
    /** État des erreurs du formulaire */
    const [errors, setErrors] = useState<FormErrors>({});
    
    /** État des données du formulaire */
    const [formData, setFormData] = useState<FormData>(initialFormData);
    
    /** Dispatch pour l'envoi des données au store Redux */
    const dispatch = useDispatch();

    /**
     * Gère les changements dans les champs du formulaire.
     *
     * @param {ChangeEvent<HTMLInputElement | HTMLSelectElement>} e - L'événement de changement.
     */
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });

        // Validation en temps réel de l'input modifié
        const error: string = validateEachInput(e, formData);
        setErrors({ ...errors, [id]: error });
    };

    /**
     * Gère la soumission du formulaire.
     *
     * @param {FormEvent<HTMLFormElement>} e - L'événement de soumission.
     */
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validation globale du formulaire
        const validationErrors: FormErrors = validateForm(formData);
        setErrors(validationErrors);

        // Vérifie s'il y a des erreurs avant soumission
        if (Object.values(validationErrors).some((error) => error !== "")) return;

        // Formatage des données avant envoi
        const formattedData: Employee = {
            ...formData,
            firstName: capitalizeText(formData.firstName),
            lastName: capitalizeText(formData.lastName),
            street: capitalizeText(formData.street),
            city: capitalizeText(formData.city),
        };

        // Envoi des données à Redux
        dispatch(addEmployee(formattedData));

        // Affichage du modal et réinitialisation du formulaire
        setIsModalOpen(true);
        setFormData(initialFormData);
        setErrors({});
    };
    return (
        <main className="main-container">
            <h2 className="main-heading">Create Employee</h2>
            <form onSubmit={handleSubmit}>
                <PersonalInfoForm formData={formData} errors={errors} onChange={handleChange} />
                <AddressForm formData={formData} errors={errors} onChange={handleChange} />
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

            {/* Modal de confirmation */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Succès" type="success">
                <p>L’employé a été ajouté avec succès.</p>
            </Modal>
        </main>
    );
};

export default EmployeeForm;
