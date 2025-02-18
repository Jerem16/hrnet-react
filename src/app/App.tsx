import React from "react";
import AddEmployees from "../pages/AddEmployees";
import PageEmployees from "../pages/PageEmployees";
import Error404 from "../pages/ErrorPages/Error404";
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<AddEmployees />} />
            <Route path="/employee-list" element={<PageEmployees />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    );
};

export default App;
