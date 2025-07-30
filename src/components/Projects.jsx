import ProjectCard from "./ProjectCard";
import Footer from "./Footer";
import { projectData } from "../dummyData/projects";

export default function Projects() {
  return (
    <>
      <section className="px-4 py-8 bg-gray-50 min-h-screen" id="work">
        <div className="max-w-6xl mx-auto mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Explore My Top Creations
          </h1>
          <p className="text-gray-600 mt-2">
            A collection of projects showcasing my skills and creativity.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid gap-6">
          {projectData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>


    </>
  );
}
