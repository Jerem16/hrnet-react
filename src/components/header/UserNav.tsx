import React from "react";
import { Link } from "react-router-dom";

interface UserNavProps {
    to: string;
    text: string;
}

const UserNav: React.FC<UserNavProps> = ({ to, text }) => {
    return (
        <div>
            <Link to={to} className="user-nav-link">
                {text}
            </Link>
        </div>
    );
};

export default UserNav;
