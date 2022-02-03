import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/HomePage";
import { SingleProjectWindow } from "./components/SingleProjectWindow";
import { Projects } from "./components/Projects";
import { AboutMe } from "./components/AboutMe";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route
                        path="/projects/:id/*"
                        element={<SingleProjectWindow />}
                    />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/aboutme" element={<AboutMe />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
