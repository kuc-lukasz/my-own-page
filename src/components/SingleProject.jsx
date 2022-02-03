import SP from "../styles/SingleProject.module.css";
export const SingleProject = ({ projects, title }) => {
    return (
        <div>
            <h1>{title}</h1>
            {projects.map((project) => {
                return (
                    <div className={SP.singleProjectWindow} key={project.title}>
                        <h3>{project.title}</h3>
                        <div className={SP.img}>
                            <img src={project.img} alt="project-img" />
                        </div>
                        <div className="language">
                            {project.language.map((lang) => {
                                return <p>{lang}</p>;
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
