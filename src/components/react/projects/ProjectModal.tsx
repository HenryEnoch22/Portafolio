import type { Project } from "../../../data/projects";

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

export default function ProjectModal({
    project,
    onClose
}: ProjectModalProps) {

    if (!project) return null;

    return (
        <div
            className="
                fixed
                inset-0
                bg-black/60
                z-50
                flex
                items-center
                justify-center
                p-5
            "
        >
            <div
                className="
                    bg-white
                    rounded-3xl
                    max-w-4xl
                    w-full
                    max-h-[90vh]
                    overflow-y-auto
                    p-8
                "
            >
                <div className="flex justify-between items-start mb-8">

                    <div>
                        <h2 className="text-3xl font-black">
                            {project.name}
                        </h2>

                        <p className="text-gray-500 mt-2">
                            {project.role}
                        </p>
                    </div>

                    <button
                        onClick={onClose}
                        className="
                            text-2xl
                            cursor-pointer
                            hover:text-red-400
                        "
                    >
                        ✕
                    </button>

                </div>

                <div className="mb-8">
                    <h3 className="font-bold mb-3">
                        Descripción
                    </h3>

                    <p className="text-gray-500 leading-relaxed whitespace-pre-line">
                        {project.description}
                    </p>
                </div>

                <div className="mb-8">
                    <h3 className="font-bold mb-3">
                        Tecnologías
                    </h3>

                    <div className="flex flex-wrap gap-2">

                        {project.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="
                                    px-3
                                    py-1
                                    rounded-full
                                    bg-red-50
                                    text-red-400
                                "
                            >
                                {tech}
                            </span>
                        ))}

                    </div>
                </div>

                <div className="mb-8">
                    <h3 className="font-bold mb-3">
                        Funcionalidades
                    </h3>

                    <ul className="space-y-2 text-gray-500">

                        {project.features.map((feature) => (
                            <li key={feature}>
                                • {feature}
                            </li>
                        ))}

                    </ul>
                </div>

                {project.images.length > 0 && (
                    <div>
                        <h3 className="font-bold mb-4">
                            Capturas
                        </h3>

                        <div className="grid md:grid-cols-2 gap-4">

                            {project.images.map((image) => (
                                <img
                                    key={image}
                                    src={image}
                                    alt={project.name}
                                    className="
                                        rounded-xl
                                        border
                                        border-gray-200
                                    "
                                />
                            ))}

                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}