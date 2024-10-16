import { AboutMe as data } from "../assets/data/data.js";

export default function About() {
  return (
    <section className="about mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="viewport">
        <div className="v-slider">
          <p>{data.p1}</p>
          <p>{data.p2}</p>
          <p>{data.p3}</p>
          <p>{data.p4}</p>
          <p>{data.p5}</p>
        </div>
      </div>
    </section>
  );
}
