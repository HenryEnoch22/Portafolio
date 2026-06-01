import type { Project } from "../../../data/projects";

interface ProjectCardProps {
    project: Project;
    onOpen: (project: Project) => void;
}

export default function ProjectCard({
    project,
    onOpen
}: ProjectCardProps) {
    return (
        <button
            onClick={() => onOpen(project)}
            className="
                bg-white
                rounded-2xl
                p-6
                shadow-sm
                hover:shadow-md
                hover:-translate-y-1
                transition-all
                text-left
                cursor-pointer
                border
                border-gray-100
                h-full
            "
        >

            <div className="flex items-center gap-4 mb-5">

                <img
                    src={project.logo}
                    alt={`${project.name} logo`}
                    className="
                        w-14
                        h-14
                        rounded-xl
                        object-contain
                        border
                        border-gray-200
                        bg-white
                        p-2
                    "
                />

                <div>
                    <h3 className="text-xl font-black">
                        {project.name}
                    </h3>

                    <p className="text-sm text-gray-400">
                        {project.role}
                    </p>
                </div>

            </div>

            {/* Description */}

            <p className="text-gray-500 mb-5 text-justify">
                {project.shortDescription}
            </p>

            {/* Technologies */}

            <div className="flex flex-wrap gap-2">

                {project.technologies.map((tech) => (
                    <span
                        key={tech}
                        className="
                            px-3
                            py-1
                            bg-red-50
                            text-red-400
                            rounded-full
                            text-sm
                            font-medium
                        "
                    >
                        {tech}
                    </span>
                ))}

            </div>
        </button>
    );
}