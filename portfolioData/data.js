import javascriptIcon from ".//../public/assets/skills/javascript.png";
import htmlIcon from ".//../public/assets/skills/html5.png";
import cssIcon from ".//../public/assets/skills/css3.png";
import reactIcon from ".//../public/assets/skills/react.png";
import nextIcon from ".//../public/assets/skills/nextjs.png";
import styledImage from ".//../public/assets/skills/styled.png";
import tailwindIcon from ".//../public/assets/skills/tailwind.png";
import mongodbIcon from ".//../public/assets/skills/mongodb.png";
import nodeIcon from ".//../public/assets/skills/nodejs.png";
import expressIcon from ".//../public/assets/skills/expressjs.png";
import githubImage from ".//../public/assets/skills/github.png";

import ecommerceImage from ".//../public/assets/projects/ecommerceHero.png";
import blogImage from ".//../public/assets/projects/blogHero.png";
import portfolioImage from ".//../public/assets/projects/portfolioHero.png";
import movieImage from ".//../public/assets/projects/movieHero.png";

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
      tech: "Styled-Components",
      imgUrl: styledImage,
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
    {
      tech: "Github",
      imgUrl: githubImage,
    },
  ],
  projects: [
    {
      projectName: "Shop-PC",
      projectImage: ecommerceImage,
      type: "ECommerce",
      description:
        "Shop-PC is an Ecommerce type application that allows consumers to search for their needed PC parts.  I worked as a single developer on this project which allowed me to learn and understand many different technologies that may benefit an Ecommerce platform.  The technologies I used is React for web framework, MongoDB Atlas clusters as the backend database,  Node.js for Javascript backend, ExpressJS backend framework to quickly initialize a local server to develop, and finally Styled-Components as JS in CSS styling framework.  The best part (technical, at least) about this project is that I got to learn a lot about how React and Node.js works so well together, which I was really curious about.  It allowed me to effortlessly create a development environment client-side/server-side without needing a language like Java/Python to do so.  Also, understanding how reusable components work with both React AND Styled-Components and how it allows you to DRY your code with addition of prop use in CSS.  I was able to deploy this application via Github gh-pages. However, I will be re-deploying with another third party hosting app like Heroku/Netlify.",
      tech: {
        framework: "React JS",
        database: "MongoDB",
        backend: "Node.js",
        backendFramework: "Express",
        style: "Styled-components",
      },
      live: "https://timmtech.github.io/shop-pc/",
      code: "https://github.com/TimMTech/shop-pc",
      inDevelopment: false,
    },
    {
      projectName: "Eblog",
      projectImage: blogImage,
      type: "Blog",
      description:
        "Eblog is a Tech Blog application that implements CRUD (Create, Read, Update, Delete) methods.  I worked as a single developer on this project which allowed me to understand how CRUD applications implement the different methods for unique consumer experience.  The technologies I used is Next.js which is a React framework that handles the tooling and configuration needed for React to build server-side rendered and static web applications, MongoDB Atlas clusters as the backend database, and Styled-Components for JS in CSS styling framework.  No backend or backend framework was used as Next.js handles api requests with their unique folder structure where the `api` file handles all endpoints for your application.  I really enjoyed this project because of how efficient Next.js handles server side architecture.  The framework comes with a file called `pages` which allows each page associated with a route/dynamic route based on its file name.  I was able to deploy this application via Heroku.",
      tech: {
        framework: "React JS",
        database: "MongoDB",
        backend: "Next.js",
        backendFramework: "",
        style: "Styled-components",
      },
      live: "https://www.etechblog.io/",
      code: "https://github.com/TimMTech/mern-blog",
      inDevelopment: false,
    },
    {
      projectName: "TM Portfolio",
      projectImage: portfolioImage,
      type: "Portfolio",
      description:
        "My portfolio was a much simpler application to build.  This project was more focused on quick and efficient way of building a collection of personal projects and introducing my personal background.  I used Next.js as a React framework to build a static web application, Firebase Cloud Firestore as my database to store all incoming contact inquiries, and Tailwind CSS as a utility-first CSS framework.  No backend or backend framework was used as Next.js handles api requests with their unique folder structure where the `api` file handles all endpoints for your application.  I enjoyed this project because of Tailwind CSS framework.  Tailwind is a utility, mobile-first, pre-built classes CSS framework that allows you to reduce lines of code, compared to Styled-Components where you build out your own CSS Component with JS.",
      tech: {
        framework: "React JS",
        database: "Firebase",
        backend: "Next.js",
        backendFramework: "",
        style: "Tailwind",
      },
      live: "https://tmportfolio.io",
      code: "https://github.com/TimMTech/next_portfolio",
      inDevelopment: false,
    },
    {
      projectName: "HBOMax 2.0",
      projectImage: movieImage,
      type: "Movie API",
      description:
        "TechFlix was one of my earlier projects where I was just beginning to learn React JS framework.  This project was mostly focused on how to build Components in React, understand how props work and how to work with an API.  For the backend I used Node.js and built a server with the help of ExpressJS as the backend framework.  While learning how to build an application with React, at the same time I was learning how to build CSS components with Styled-Components CSS framework.  I enjoyed this project becuase it allowed me to broaden my knowledge in front-end with the integration of React framework, as well as how important a backend is when requesting data through an API.  This application is currently hosted on Github gh-pages.  However once more features are added and a database is implemented, I will be re-deploying this application with Netlify/Heroku.",
      tech: {
        framework: "React JS",
        database: "MongoDB",
        backend: "Next.js",
        backendFramework: "",
        style: "Tailwind",
      },
      live: "",
      code: "https://github.com/TimMTech/hbo-clone",
      inDevelopment: true,
    },
  ],
};
