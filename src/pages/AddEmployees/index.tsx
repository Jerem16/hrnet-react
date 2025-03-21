import EmployeeForm from "../../components/form/EmployeeForm";
import Header from "../../components/header/Header";

function AddEmployees() {
    return (
        <>
            <Header to={"/employee"} text={"Current Employees"} />
            <EmployeeForm />
        </>
    );
}

export default AddEmployees;
