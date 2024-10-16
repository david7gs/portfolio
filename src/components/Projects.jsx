import ProjectTile from "./ProjectTile";
import { projectContent as Data } from "../assets/data/data";

export default function Projects() {
  return (
    <section className="projects mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
      <h2>Projects</h2>
      <div>
        <ul className="group/list h-slider__viewport">
          {Data.map((project, index) => {
            return <ProjectTile data={project} key={index} />;
          })}
        </ul>
      </div>
    </section>
  );
}
