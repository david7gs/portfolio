import ExperienceTile from "./ExperienceTile";
import { experienceContent as data } from "../assets/data/data";

export default function Experience() {
  return (
    <section className="experience mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected Experience">
      <h2>Experience</h2>
      <ul className="group/list">
        {data.map((experience, index) => {
          return <ExperienceTile data={experience} key={index} />;
        })}
      </ul>
    </section>
  );
}
