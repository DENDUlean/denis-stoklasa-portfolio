import React from "react";
import { Link } from "react-router-dom";

const ProjectItem = ({ title, date, projectUrl}) => {
    return (
        <div className="flex gap-12 lg:text-base text-xs">
            <h1 className="text-gray-500 dark:text-gray-200">{date}</h1>
            <Link to={projectUrl} className="font-semibold text-black hover:text-gray-500 dark:text-white dark:hover:text-gray-300">{title}</Link>
        </div>
    );
}

export default ProjectItem;