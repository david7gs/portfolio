import { useContext } from "react";
import { PortfolioContext } from "../store/portfolio_contex";
import Button from "./Button";
import { mainNavTech } from "../assets/data/data";
import Git from "../assets/images/svgs/git.svg";
import LinkedIn from "../assets/images/svgs/linkedIn.svg";

export default function MainNav() {
  const { view, updateView } = useContext(PortfolioContext);

  return (
    <header className="navigation">
      <div className="info-wrap">
        <h1>David Garcia-Shelton</h1>
        <h2>Senior Frontend Engineer</h2>
        <p>Bringing pixel perfect user experiences to a theater near you!</p>
        <nav>
          <ul>
            <li>
              <Button className={view === "ABOUT" ? "nav-button active" : "nav-button"} aria-label="view about section" onClick={() => updateView("ABOUT")}>
                About ( )
              </Button>
            </li>
            <li>
              <Button aria-label="view about experience section" className={view === "EXPERIENCE" ? "nav-button active" : "nav-button"} onClick={() => updateView("EXPERIENCE")}>
                ...Experience
              </Button>
            </li>
            <li>
              <Button aria-label="view projects section" className={view === "PROJECTS" ? "nav-button active" : "nav-button"} onClick={() => updateView("PROJECTS")}>
                Projects ( )
              </Button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="foundation">
        <div className="pb-wrap">
          <p>Built With:</p>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {mainNavTech.map(({ id, tech }) => {
              return (
                <li className="mr-1.5 mt-2" key={id}>
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-slate-200 ">{tech}</div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="social-wrap">
          <ul className="social" aria-label="social media">
            <li>
              <a className="block hover:text-slate-200" href="https://github.com/david7gs" target="_blank" rel="noreferrer noopener" aria-label="GitHub (opens in a new tab)" title="GitHub">
                <span className="sr-only">GitHub</span>
                <Git />
              </a>
            </li>
            <li>
              <a
                className="block hover:text-slate-200"
                href="https://www.linkedin.com/in/david7gs"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn (opens in a new tab)"
                title="LinkedIn"
              >
                <span className="sr-only">LinkedIn</span>
                <LinkedIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
