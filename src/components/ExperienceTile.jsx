export default function experienceTile({ data }) {
  return (
    <>
      <li className="mb-12">
        <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none sm:-inset-x-6 sm:block sm:group-hover:bg-slate-700/40 sm:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] sm:group-hover:drop-shadow-lg"></div>
          <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide sm:col-span-2" aria-label="2024 to Present">
            {data.date}
          </header>
          <div className="z-10 sm:col-span-6">
            <h3 className="font-medium leading-snug">
              <div>
                <a
                  className="inline-flex items-baseline font-medium leading-tight hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                  href={data.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={data.hrefAriaLabel}
                >
                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                  <span>
                    {data.position}&nbsp;
                    <span className="inline-block">{data.company}</span>
                  </span>
                </a>
              </div>
            </h3>
            <p className="mt-2 text-sm leading-normal">{data.description}</p>
            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
              {data.techStack.map((tech, index) => {
                return (
                  <li className="mr-1.5 mt-2" key={data.id + index}>
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5">{tech}</div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </li>
    </>
  );
}
