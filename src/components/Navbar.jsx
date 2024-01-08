import React from "react";
import {Link} from 'react-router-dom'
import ThemeToggle from "./ThemeToggle";
import HomeBtn from "./HomeBtn";

const Navbar = () => {

    return (
        <div className="flex items-center justify-center w-full h-15 p-5 gap-10">
            <HomeBtn/>
            <ul className="flex gap-10 text-gray-500 cursor-pointer text-sm dark:text-white">
                <Link to="/about" className="hover:text-black dark:hover:text-gray-400">About</Link>
                <Link to="/projects" className="hover:text-black dark:hover:text-gray-400">Projects</Link>
            </ul>
            <ThemeToggle/>
        </div>
    )
}

export default Navbar;