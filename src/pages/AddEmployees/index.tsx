import EmployeeForm from "../../components/EmployeeForm";
import Header from "../../components/header/Header";

function AddEmployees() {
    return (
        <>
            <Header to={"/employee-list"} text={"Current Employees"} />
            <EmployeeForm />
        </>
    );
}

export default AddEmployees;
