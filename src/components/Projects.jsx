import { SingleProject } from "./SingleProject";

import { useFetch } from "./useFetch";

export const Projects = () => {
    const {
        data: projects,
        isPending,
        error,
    } = useFetch("http://localhost:3005/Projects");

    return (
        <div className="projects">
            {error && <div>Nie możemy pobrać danych</div>}
            {isPending && <div>Loading ... </div>}
            {projects && <SingleProject projects={projects} title="Projects" />}
        </div>
    );
};
