import React from "react";
import projectData from "../data/projectData";
import ProjectItem from "./ProjectItem";
import { Link } from "react-router-dom";

const Projects = () => {
    return (
        <div className="flex flex-col gap-8 w-4/12">
            <div>
                <p className="text-gray-500">Poslední projekty</p>
            </div>
            <div className="flex flex-col gap-5">
                {projectData.map(project => (
                    <ProjectItem
                        date={project.date}
                        title={project.title}
                        projectUrl={project.projectUrl}
                    />
                ))}
            </div>
            <div>
                <Link to="/projects" className="hover:text-black text-gray-500">Veškeré projekty</Link>
            </div>
        </div>
    )
}

export default Projects;