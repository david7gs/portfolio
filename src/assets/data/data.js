export const mainNavTech = [
  { id: 6708, tech: "Javascript" },
  { id: 8207, tech: "React" },
  { id: 3113, tech: "Node" },
  { id: 7796, tech: "Express" },
];

export const AboutMe = {
  title: "Senior Frontend Engineer",
  tag: "Creating exceptional web experiences",
  p1: "In 2008, I reached a turning point in my career. While I had initially pursued marketing, I realized it wasn't fulfilling my inner passion. After some deep introspection, I decided to embrace my lifelong love for programming—a passion I'd had since childhood. Back then, I would spend countless hours writing and hacking role-playing games, and I knew that software development was my true calling.",
  p2: "Without formal computer science education, I embarked on a self-taught journey, dedicating every free moment to mastering web development. This process was filled with excitement as I gradually built my skills and solidified my foundation.",
  p3: "Soon, I began working with small businesses to develop their websites, gaining hands-on experience and expanding my portfolio. Some of my clients included Naked Sky Entertainment, a boutique video game company under the Sony umbrella; Lil' Gamer, a developer of iPhone games for children; and Hitachi Information Technology Group.",
  p4: "More recently, I have been developing custom AEM (Adobe Experience Manager) components and marketing experiences for Veritas Technologies and Norton Security, as well as developing the eCommerce platform for Norton Security.",
  p5: "When I'm not coding, you'll likely find me on the tennis court, competing or captaining one of my USTA teams, which I've led to the California state championships on multiple occasions. Outside of tennis, I love to cook and spend time with my Aussiedoodle, Pebbles, who keeps me entertained and inspired.",
};

export const projectContent = [
  {
    id: 3105,
    isApp: false,
    view: "PORTFOLIO",
    href: undefined,
    ariaLabel: "Link to Github to review the code for this portfolio",
    projectTitle: "This Portfolio App",
    projectDescription:
      "This portfolio you are veiwing was built in React, Tailwind, and some custom CSS. To view the code click on this project tile to reveiw the code in Github. In the backend is Node with Express handling the routing",
    imgAlt: "Thumbnail image of this portfolio site",
    imgSrc: "../src/assets/images/img/portfolio_app.png",
    techStack: ["React", "Tailwind", "Express", "Git"],
  },
  {
    id: 2189,
    isApp: false,
    view: "PROJECT_MANAGER",
    href: "https://github.com/david7gs/project-manager",
    ariaLabel: "Link to Github to review the code for the project management app",
    projectTitle: "Project Management App",
    projectDescription: "React app to manage projects and project tasks. Create multiple projects and add tasks for each project.",
    imgAlt: "screen shot of project management app",
    imgSrc: "../src/assets/images/img/project_management_app.png",
    techStack: ["React", "Tailwind", "Git"],
  },
  {
    id: 5497,
    isApp: false,
    view: "CURRENT_PROJECT",
    href: undefined,
    ariaLabel: "Currently no link available",
    projectTitle: "Current Project - Scheduling App",
    projectDescription:
      "This is my current project and I will be a bit vague on it's intent. It is a React app to help manage scheduling. Currently no link available but I am working on making a modified version of the app available to view",
    imgAlt: "screen shot of current project",
    imgSrc: "../src/assets/images/img/current_project.png",
    techStack: ["React", "Tailwind", "Git"],
  },
  {
    id: 8237,
    isApp: false,
    view: "VERITAS",
    href: "https://www.veritas.com",
    ariaLabel: "Link to Veritas dot com",
    projectTitle: "Development of Custom AEM Components",
    projectDescription:
      "Wrote many custom AEM (Adobe Experience Manager) components supporting a variety of brand, marketing, event initiatives. Building new, enhancing exhisting, and extending core components.",
    imgAlt: "Screenshot of veritas dot com homepage",
    imgSrc: "../src/assets/images/img/veritas_com.png",
    techStack: ["Javascript", "AEM", "JCR", "HTL", "Sling", "Maven", "Git"],
  },
  {
    id: 8237,
    isApp: false,
    view: "VERITAS",
    href: "https://www.veritas.com/infographics/take-control-of-your-data",
    ariaLabel: "Link to Veritas dot com infographic",
    projectTitle: "Extending AEM Core Components",
    projectDescription:
      "Requirement: Duplicate the Infographic experience (PDF asset) in HTML. This was a big dev team project. My work primarily focused on extending the background and text core components of AEM. Adding a variety of customizable features while maintaining backward compatability.",
    imgAlt: "Screenshot of veritas dot com infographic project",
    imgSrc: "../src/assets/images/img/take_control_of_your_data.png",
    techStack: ["Javascript", "AEM", "JCR", "HTL", "Sling", "Maven", "CRXDE", "Git"],
  },
  {
    id: 8237,
    isApp: false,
    view: "NORTON",
    href: "https://www.norton.com",
    ariaLabel: "Link to norton dot com",
    projectTitle: "Senior Web Developer",
    projectDescription:
      "While at Norton I worked on it's eCommerce platform, re-writting the front-end from an Apache Wicket based multi-page experience to a React SPA. Additionally, I built a multitude of promotional micro-sites with synchronized launches accross the globe",
    imgAlt: "Screenshot of norton dot com home page",
    imgSrc: "../src/assets/images/img/norton_com.png",
    techStack: ["Javascript", "React", "Handlebars", "jQuery", "Git"],
  },
];

export const experienceContent = [
  {
    id: 9312,
    date: "Nov 2019 — Sept 2024",
    dateAriaLabel: "November 2019 — September 2024",
    href: "https://www.veritas.com",
    hrefAriaLabel: "Veritas dot com (opens in a new tab)",
    position: "Principle Web Producer / Web Developer",
    company: "Veritas Technologies",
    description:
      "Development, update, enhancement, and debugging of AEM (Adobe Experience Manager) components as well as management of web content, updates, and localization. Creating and executing strategies for major web projects and digital initiatives, collaborating closely with development & design teams, and product stakeholders",
    techStack: ["HTML", "CSS", "JavaScript", "AEM", "JCR", "HTL", "Sling", "Maven", "React", "Vue", "Node", "Git", "jQuery", "Localization"],
  },
  {
    id: 6868,
    date: "Jan 2013 — July 2019",
    dateAriaLabel: "Jan 2013 — July 2019",
    href: "https://www.norton.com",
    hrefAriaLabel: "Norton dot com (opens in a new tab)",
    position: "Senior Web Developer - Norton.com eCommerce Platform",
    company: "Symantec",
    description:
      "Maintenance, enhancement, and debugging of Norton.com checkout application. Analysis of new feature requirements, in close collaboration with leadership, stakeholders, designers, and backend engineering team to ensure on-time and on-scope delivery.",
    techStack: ["HTML", "CSS", "JavaScript", "React", "jQuery", "handleBars", "Node", "PostgreSQL", "Git", "Perforce", "Localization"],
  },
  {
    id: 9848,
    date: "Jan 2013 — July 2019",
    dateAriaLabel: "Jan 2013 — July 2019",
    href: "https://www.norton.com",
    hrefAriaLabel: "Norton dot com (opens in a new tab)",
    position: "Web Developer - Norton.com",
    company: "Symantec",
    description:
      "Development of marketing, brand, and event promotion landing pages in close collaboration with designer team and stakeholders to ensure on-scope, pixel perfect delivery; converting business requirements into feature specs, user stories, and acceptance criteria.",
    techStack: ["HTML", "CSS", "JavaScript", "jQuery", "Teamsite", "Localization"],
  },
  {
    id: 8237,
    date: "Oct 2011 — Jan 2013",
    dateAriaLabel: "Oct 2011 — Jan 2013",
    href: "https://www.norton.com",
    hrefAriaLabel: "Norton dot com (opens in a new tab)",
    position: "Senior Web Producer - Norton",
    company: "Norton (Symantec)",
    description: "Managed content updates, new page production, and localization across 22 languages, developing marketing/brand promotional landing pages, micro-sights, and product launch pages.",
    techStack: ["HTML", "CSS", "JavaScript", "jQuery", "Teamsite", "Localization"],
  },
  {
    id: 3105,
    date: "2008 — 2011",
    dateAriaLabel: "2008 — 2011",
    href: undefined,
    hrefAriaLabel: "no URL available",
    position: "Marketing and brand Web Development - Sole Proprietor",
    company: "iD Communications",
    description: "Marketing and Brand Web Development specializing in small businesses. Designed and developed new websites for small businesses",
    techStack: ["JavaScript", "react", "jQuery", "handleBars"],
  },
  {
    id: 7893,
    date: "2007 — Jan 2008",
    dateAriaLabel: "2007 — Jan 2008",
    href: "https://www.pge.com",
    hrefAriaLabel: "Pacific Gas & Electric website URL pge dot com",
    position: "Marketing Project Manager",
    company: "Pacific Gas & Electric (PG&E)",
    description: "Managed lead generation, direct mail, newsletter, POS, event marketing, and technical document marketing collateral projects supporting Consumer Energy Efficiency sales channels.",
    techStack: ["Project Management", "Presentation Preperation"],
  },
];
