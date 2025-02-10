import React from "react";
import LogoLink from "./LogoLink";
import UserNav from "./UserNav";

interface HeaderProps {
    to: string;
    text: string;
}

const Header: React.FC<HeaderProps> = ({ to, text }) => {
    return (
        <header className="fixed top-0 w-full min-w-[1000px] bg-gray-900/80 backdrop-blur-md text-white p-4 shadow-md z-50">
            <nav className="flex justify-between items-center max-w-5xl mx-auto">
                <LogoLink />
                <UserNav to={to} text={text} />
            </nav>
        </header>
    );
};

export default Header;
