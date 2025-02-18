import React from "react";
import LogoLink from "./LogoLink";
import UserNav from "./UserNav";

interface HeaderProps {
    to: string;
    text: string;
}

const Header: React.FC<HeaderProps> = ({ to, text }) => {
    return (
        <header className="header">
            <nav className="nav">
                <LogoLink />
                <UserNav to={to} text={text} />
            </nav>
        </header>
        
    );
};

export default Header;
