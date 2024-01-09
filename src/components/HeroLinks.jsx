import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaInstagramSquare } from "react-icons/fa";

const HeroLinks = () => {
    return (
        <div className="lg:flex lg:flex-col lg:gap-2 lg:w-6/12 sm:flex sm:flex-col sm:text-start sm:items-start sm:w-4/12 sm:gap-3 flex gap-3 text-sm w-9/12 text-center justify-center">
            <div className="lg:flex lg:items-start lg:flex-row lg:w-full sm:w-full sm:items-start sm:flex sm:flex-row flex flex-col items-center gap-2">
                <Link to="https://github.com/DENDUlean" className="cursor-pointer"><FaGithub size={20} className="text-gray-500"/></Link>
                <Link to="https://github.com/DENDUlean" className="text-gray-500 hover:text-black sm:block hidden">Github Profil</Link>
            </div>

            <div className="lg:flex lg:items-start lg:flex-row sm:w-full sm:items-start sm:flex sm:flex-row flex flex-col items-center gap-2">
                <Link to="https://www.linkedin.com/in/denis-stoklasa-734723281/" className="cursor-pointer"><FaLinkedin size={20} className="text-gray-500"/></Link>
                <Link to="https://www.linkedin.com/in/denis-stoklasa-734723281/" className="text-gray-500 hover:text-black sm:block hidden">Linkedln Profil</Link>
            </div>

            <div className="lg:flex lg:items-start lg:flex-row sm:w-full sm:items-start sm:flex sm:flex-row flex flex-col items-center gap-2">
                <Link to="https://www.instagram.com/denis.stoklasa/" className="cursor-pointer"><FaInstagramSquare size={20} className="text-gray-500"/></Link>
                <Link to="https://www.instagram.com/denis.stoklasa/" className="text-gray-500 hover:text-black sm:block hidden">Instagram Profil</Link>
            </div>
        </div>
    )
}

export default HeroLinks;