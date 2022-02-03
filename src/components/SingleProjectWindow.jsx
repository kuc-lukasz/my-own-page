import { useFetch } from "./useFetch";
import { useParams } from "react-router-dom";

export const SingleProjectWindow = () => {
    const { id } = useParams();
    const {
        data: projects,
        isPending,
        error,
    } = useFetch("http://localhost:3005/Projects/" + id);

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
        </div>
    );
};

export default SingleProjectWindow;
