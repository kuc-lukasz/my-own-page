import { SingleProject } from "./SingleProject";

import { useFetch } from "./useFetch";
import ProjectsStyles from "../styles/Projects.module.css";
import Navigation from "./Navigation";

export const Projects = () => {
    const { data: projects, isPending, error } = useFetch("/storage/db.json");
    console.log(projects);
    return (
        <div className={ProjectsStyles.mainWindow}>
            {error && <div>Nie możemy pobrać danych</div>}
            {isPending && <div>Loading ... </div>}
            {projects && projects.length > 0 ? (
                <SingleProject projects={projects} title="Projects" />
            ) : (
                <></>
            )}
            <Navigation />
        </div>
    );
};
