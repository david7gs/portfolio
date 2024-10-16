import { useContext } from "react";
import { PortfolioContext } from "../store/portfolio_contex";
import Experience from "./Experience";
import Projects from "./Projects";
import About from "./About";
import Archive from "./Archive";

export default function Viewer() {
  const { view } = useContext(PortfolioContext);
  let showView = <About />;
  showView = view === "EXPERIENCE" ? (showView = <Experience />) : view === "PROJECTS" ? (showView = <Projects />) : view === "ARCHIVE" ? (showView = <Archive />) : <About />;

  return <main className="main">{showView}</main>;
}
