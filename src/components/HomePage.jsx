// import { AboutMe } from "./AboutMe";
// import { Projects } from "./Projects";
// import { SingleProjectWindow } from "./SingleProjectWindow";

import { ImageProfile } from "./ImageProfile";
import { Link } from "react-router-dom";

export const HomePage = () => {
    return (
        <div>
            <h1>Home Page!</h1>
            <div>
                <Link to="/aboutme">Aboute Me</Link>
                <Link to="/projects">Projects</Link>
            </div>
            <div>
                <ImageProfile />
            </div>
        </div>
    );
};
