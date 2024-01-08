import React from "react";
import { Link } from "react-router-dom";

const ProjectItem = ({ title, date, projectUrl}) => {
    return (
        <div className="flex gap-12">
            <h1 className="text-gray-500">{date}</h1>
            <Link to={projectUrl} className="font-semibold hover:text-gray-500">{title}</Link>
        </div>
    );
}

export default ProjectItem;