import React from "react";
import projectData from "../data/projectData";
import ProjectItem from "./ProjectItem";
import { Link } from "react-router-dom";

const Projects = () => {
    return (
        <div className="flex flex-col lg:w-4/12 lg:gap-7 w-9/12 lg:items-start sm:items-start items-center">
            
            <div className="flex flex-col gap-6 w-full">
                
                <div className="lg:text-base text-xs">
                    <p className="text-gray-500 dark:text-white">Poslední projekty</p>
                </div>

                <div className="flex flex-col gap-3">
                    {projectData.map(project => (
                        <ProjectItem
                            date={project.date}
                            title={project.title}
                            projectUrl={project.projectUrl}
                        />
                    ))}
                </div>

                <div className="lg:text-base text-xs">
                    <Link to="/projects" className="hover:text-black text-gray-500 dark:text-white dark:hover:text-gray-300">Veškeré projekty</Link>
                </div>

            </div>
        </div>
    )
}

export default Projects;