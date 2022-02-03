import SP from "../styles/SingleProject.module.css";
import { Link } from "react-router-dom";
export const SingleProject = ({ projects, title }) => {
    return (
        <div>
            <h1>{title}</h1>
            {projects.map((project) => {
                return (
                    <div className={SP.singleProjectWindow} key={project.title}>
                        <Link to={`/projects/${project.id}`}>
                            <h3>{project.title}</h3>
                            <div className={SP.img}>
                                <img src={project.img} alt="project-img" />
                            </div>
                            <div className="language">
                                {project.language.map((lang) => {
                                    return <p>{lang}</p>;
                                })}
                            </div>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};
