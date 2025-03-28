import EmployeeForm from "../../components/form/EmployeeForm";
import Header from "../../components/header/Header";

/**
 * Composant principal pour la page d'ajout d'employés.
 * Affiche le formulaire d'ajout d'un employé et un en-tête de navigation.
 */
function AddEmployees() {
    return (
        <>
            {/* Affiche l'en-tête avec un lien vers la page des employés actuels */}
            <Header to={"/employee"} text={"Current Employees"} />
            {/* Affiche le formulaire pour ajouter un employé */}
            <EmployeeForm />
        </>
    );
}

export default AddEmployees;
