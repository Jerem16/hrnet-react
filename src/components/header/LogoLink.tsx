import React from "react";
import { Link } from "react-router-dom";

const LogoLink: React.FC = () => {
    return (
        <Link to="/" className="logo-link">
            <img
                className="logo-image"
                src="/HRnet-logo.svg"
                alt="HRnet Logo"
                width={98}
                height={56}
            />
            <h1 className="sr-only">HRnet</h1>
        </Link>
    );
};

export default LogoLink;
