import { useParams } from "react-router-dom";
import SPW from "../styles/SingleProjectWindow.module.css";
import { Navigation } from "./Navigation";
import { getProject } from "../storage/db";

export const SingleProjectWindow = () => {
    let params = useParams();
    let project = getProject(params.id);

    return (
        <>
            <Navigation />
            <div key={project.id} className={SPW.mainWindow}>
                <h2 key={project.id} className={SPW.title}>
                    {project.title}
                </h2>
                <div className={SPW.vidAndAbout}>
                    <iframe
                        src={project.videoSrc}
                        title={project.title}
                        className={SPW.video}
                    ></iframe>

                    <div className={SPW.projectDescribe}>
                        <h3 className={SPW.projectDescribeTitle}>
                            About Project
                        </h3>
                        <p className={SPW.projectDescribeContent}>
                            {project.describe}
                        </p>
                    </div>
                </div>
                <div className={SPW.bottom}>
                    {" "}
                    <a
                        href={project.github}
                        className={SPW.a}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={project.githubIcon} alt="githubIcon" />
                        <p className={SPW.githubText}>GITHUB CODE</p>
                    </a>
                    {project.netflify ? (
                        <a
                            href={project.netflify}
                            className={SPW.a}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={project.netflifyIcon} alt="githubIcon" />
                            <p className={SPW.githubText}>TRY IT!</p>
                        </a>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </>
    );
};
