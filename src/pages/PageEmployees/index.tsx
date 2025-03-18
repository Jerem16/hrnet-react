import EmployeeSortTable from "../../components/tables/EmployeeSortTable";
import Header from "../../components/header/Header";

function PageEmployees() {
    return (
        <>
            <Header to={"/"} text={"Add a New Employee"} />
            <EmployeeSortTable />
        </>
    );
}

export default PageEmployees;
