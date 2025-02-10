import React from "react";
import { Link } from "react-router-dom";

const LogoLink: React.FC = () => {
    return (
        <Link to="/" className="flex items-center">
            <img
                className="h-14 w-auto"
                src="/HRnet-logo.svg"
                alt="HRnet Logo"
            />
            <h1 className="sr-only">HRnet</h1>
        </Link>
    );
};

export default LogoLink;
