import { SingleProject } from "./SingleProject";

// import { useFetch } from "./useFetch";
import ProjectsStyles from "../styles/Projects.module.css";
import { Navigation } from "./Navigation";
import { AllProjects } from "../storage/db";

export const Projects = () => {
    const projects = AllProjects();
    return (
        <div className={ProjectsStyles.mainWindow}>
            {/* {error && <div>Nie możemy pobrać danych</div>}
            {isPending && <div>Loading ... </div>} */}
            {<SingleProject projects={projects} title="Projects" />}
            <Navigation />
        </div>
    );
};
