import EmployeeList from "../../components/tables/EmployeeList";
import Header from "../../components/header/Header";

function PageEmployees() {
    return (
        <>
            <Header to={"/"} text={"Add a New Employee"} />
            <EmployeeList />
        </>
    );
}

export default PageEmployees;
