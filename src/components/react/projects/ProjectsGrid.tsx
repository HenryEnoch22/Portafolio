import { useState } from "react";

import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

import {
    projects,
    type Project
} from "../../../data/projects";

export default function ProjectsGrid() {

    const [selectedProject, setSelectedProject] =useState<Project | null>(null);

    return (
        <>
            <div
                className="
                    grid
                    md:grid-cols-2
                    xl:grid-cols-3
                    gap-6
                "
            >
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        onOpen={setSelectedProject}
                    />
                ))}
            </div>

            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </>
    );
}