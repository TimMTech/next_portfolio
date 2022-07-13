import javascriptIcon from ".//../public/assets/skills/javascript.png"
import htmlIcon from ".//../public/assets/skills/html5.png"
import cssIcon from ".//../public/assets/skills/css3.png"
import reactIcon from ".//../public/assets/skills/react.png"
import nextIcon from ".//../public/assets/skills/nextjs.png"
import styledComponentIcon from ".//../public/assets/skills/styledComponents.png"
import tailwindIcon from ".//../public/assets/skills/tailwind.png"
import mongodbIcon from ".//../public/assets/skills/mongodb.png"
import nodeIcon from ".//../public/assets/skills/nodejs.png"
import expressIcon from ".//../public/assets/skills/expressjs.png"


export const data = {
  skills: [
    {
      tech: "Javascript",
      imgUrl: javascriptIcon,
    },
    {
      tech: "HTML5",
      imgUrl: htmlIcon,
    },
    {
      tech: "CSS3",
      imgUrl: cssIcon,
    },
    {
      tech: "React",
      imgUrl: reactIcon,
    },
    {
      tech: "Next.js",
      imgUrl: nextIcon,
    },

    {
      tech: "Tailwind",
      imgUrl: tailwindIcon,
    },
    {
      tech: "MongoDB Atlas",
      imgUrl: mongodbIcon,
    },

    {
      tech: "Node.js",
      imgUrl: nodeIcon,
    },
    {
      tech: "Express",
      imgUrl: expressIcon,
    },
  ],
  projects: [
    {
      projectName: "Shop-PC",
      type: "ECommerce",
      tech: {
        framework: "React",
        database: "MongoDB",
        backend: "Node.js",
        backendFramework: "Express",
        style: "Styled-components",
      },
      link: "",
      
    },
    {
      projectName: "Eblog",
      type: "Blog",
      tech: {
        framework: "React",
        database: "MongoDB",
        backend: "*Next.js",
        backendFramework: "*Next.js",
        style: "Styled-components",
      },
      link: "",
    },
    {
      projectName: "TM Portfolio",
      type: "Portfolio",
      tech: {
        framework: "React",
        database: "None",
        backend: "*Next.js",
        backendFramework: "*Next.js",
        style: "Tailwind",
      },
      link: "",
    },
    {
      projectName: "TechFlix",
      type: "Movie API",
      tech: {
        framework: "React",
        database: "None",
        backend: "Node.js",
        backendFramework: "Express",
        style: "Styled Components",
      },
      link: "",
    },
  ],
};
