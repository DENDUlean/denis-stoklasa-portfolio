import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaInstagramSquare } from "react-icons/fa";

const HeroLinks = () => {
    return (
        <div className="lg:flex lg:flex-col lg:gap-2 lg:w-4/12 sm:flex sm:flex-col sm:gap-3 flex gap-2 text-sm w-full justify-center">
            <div className="border lg:flex lg:items-start lg:flex-row flex flex-col items-center gap-2">
                <FaGithub size={20} className="text-gray-500"/>
                <Link to="https://github.com/DENDUlean" className="text-gray-500 hover:text-black">Github Profil</Link>
            </div>

            <div className="border lg:flex lg:items-start lg:flex-row flex flex-col items-center gap-2">
                <FaLinkedin size={20} className="text-gray-500"/>
                <Link to="https://github.com/DENDUlean" className="text-gray-500 hover:text-black">Linkedln Profil</Link>
            </div>

            <div className="border lg:flex lg:items-start lg:flex-row flex flex-col items-center gap-2">
                <FaInstagramSquare size={20} className="text-gray-500"/>
                <Link to="https://www.instagram.com/denis.stoklasa/" className="text-gray-500 hover:text-black">Instagram Profil</Link>
            </div>
        </div>
    )
}

export default HeroLinks;