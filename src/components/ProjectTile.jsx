import { useContext } from "react";
import { PortfolioContext } from "../store/portfolio_contex";

export default function ProjectTile({ data }) {
  const { updateView } = useContext(PortfolioContext);

  function handleClick(view) {
    updateView(view);
  }

  let showLink = (
    <a
      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
      href={data.href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={data.ariaLabel}
    >
      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
      <span className="project-title">{data.projectTitle}</span>
    </a>
  );
  if (data.isApp) {
    showLink = (
      <button
        aria-label={data.ariaLabel}
        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
        onClick={() => handleClick(data.view)}
      >
        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
        <span className="project-title">{data.projectTitle}</span>
      </button>
    );
  }
  return (
    <>
      <li className="mb-12 h-slider__viewport-slide" key={data.id}>
        <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none sm:-inset-x-6 sm:block sm:group-hover:bg-slate-700/40 sm:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] sm:group-hover:drop-shadow-lg"></div>
          <div className="z-10 sm:order-2 sm:col-span-6">
            <h3>{showLink}</h3>
            <p className="project-description mt-2 text-sm leading-normal">{data.projectDescription}</p>
            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
              {data.techStack.map((item) => {
                return (
                  <li className="mr-1.5 mt-2" key={data.id + item}>
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-slate-200 ">{item}</div>
                  </li>
                );
              })}
            </ul>
          </div>
          <img
            alt={data.projectTitle + " screenshot"}
            loading="lazy"
            decoding="async"
            data-nimg="1"
            className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
            src={data.imgSrc}
          />
        </div>
      </li>
    </>
  );
}
