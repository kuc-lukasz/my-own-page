import { AboutMe } from "./AboutMe";
import { ImageProfile } from "./ImageProfile";
import { Projects } from "./Projects";

export const HomePage = () => {
  return (
    <div>
      <div>
        <AboutMe />
        <Projects />
      </div>
      <div>
        <ImageProfile />
      </div>
    </div>
  );
};
