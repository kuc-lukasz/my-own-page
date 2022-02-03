import { useFetch } from "./useFetch";
export const SingleProjectWindow = () => {
    const {
        data: projects,
        isPending,
        error,
    } = useFetch("http://localhost:3005/Projects");
    return (
        <div>
            {error && <div>Nie możemy pobrać danych</div>}
            {isPending && <div>Loading ... </div>}
            {projects && (
                <div key={projects.id}>
                    <h2>{projects.title}</h2>
                    <div>
                        <video src={projects.videoSrc}></video>
                        <div>
                            <h3>About Project</h3>
                            <p>{projects.describe}</p>
                        </div>
                    </div>
                    <div>
                        <a href={projects.github}>
                            <img src={projects.githubIcon} alt="githubIcon" />
                            <p>GITHUB CODE</p>
                        </a>
                    </div>
                </div>
            )}
            <SingleProjectWindow />
        </div>
    );
};

export default SingleProjectWindow;
