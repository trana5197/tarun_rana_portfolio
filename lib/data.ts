import React from "react";

import { CgWorkAlt } from "react-icons/cg";
import { HiAcademicCap } from "react-icons/hi2";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "University of Texas at Arlington",
    location: "Arlington, TX",
    description:
      "Completed my Master's of Science in Computer Science (Aug 2021 - May 2023) with 3.75 GPA.",
    icon: React.createElement(HiAcademicCap),
    date: "2021 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Mumbai, IN",
    description:
      "I worked as a full-stack developer for 1.3 years in Mindise Pvt Ltd. My stack includes HTML5, CSS3, SASS, JavaScript, React (React-router, Redux/toolkit, Context API and React hooks), TypeScript, Node.js (Express, JWT, RESTful API, Mongoose ODM), MongoDB and git. I'm open to full-time opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },
  {
    title: "University of Mumbai",
    location: "Navi Mumbai, IN",
    description:
      "Completed my Bachelor's of Engineering in Computer Engineering (Aug 2014 - May 2018) with 3.50 GPA.",
    icon: React.createElement(HiAcademicCap),
    date: "2014 - 2018",
  },
] as const;

export const projectsData = [
  {
    title: "World Oasis",
    description: [
      `Developed a dynamic web application using React.js, integrating Supabase—a modern data platform—for efficient database management and real-time updates.`,
      `Employed Styled Components for consistent and visually appealing styling, enhancing the user interface across application components.`,
      `Implemented React Query to optimize data handling, resulting in faster updates and improved user responsiveness. `,
      `Enriched user experience by adding functionalities such as Filtering, Pagination, Sorting, and a Dark Mode feature, while ensuring security through robust Authorization and Authentication integration.`,
    ],
    tags: ["React.js", "React query", "Supabase (Postgres SQL)", "RESTful API"],
    githubLink: "https://github.com/trana5197/world-oasis",
  },
  {
    title: "E-Commerce",
    description: [
      `Created a dynamic e-commerce web app in C# and ASP.NET with user registration, shopping cart, and real-time order tracking, optimizing code structure using Factory Method and Repository Pattern.`,

      `Ensured optimal functionality and user experience through rigorous testing procedures, including NUnit unit testing and Selenium end-to-end testing.`,

      `Utilized C# and .NET technologies to create a scalable and maintainable codebase, enhancing application performance and enabling future development potential.`,
    ],
    tags: [
      "C#",
      "ASP.NET Core",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Microsoft SQL Server",
    ],
    githubLink: "https://github.com/trana5197",
  },
  {
    title: "Multi-layer Neural Network",
    description: [
      `Engineered a multi-layer neural network with TensorFlow and NumPy libraries in Python for image classification from the MNIST dataset; optimized inputted activation and loss functions to achieve 98.73% accuracy.`,
      `Integrated Convolutional Neural Networks and Recurrent Neural Networks in image classification tasks; amplified accuracy by 5% on average.`,
    ],
    tags: ["Python", "NumPy", "TensorFlow", "Google Colab"],
    githubLink: "https://github.com/trana5197/marketplace-react",
  },
  {
    title: "CollegePlace",
    description: [
      `Successfully managed and supervised a team of 5 developers to plan and execute the development of a client-side rendered website, completing its completion within the deadline.`,
      `Executed React.js and context API best practices to develop a website that allowed students to create their own clubs and blogs, increasing user engagement by 45%.`,
      `Developed RESTful API using Laravel framework, employing Eloquent as ORM and seamlessly integrating phpMyAdmin for streamlined data management and storage, resulting in a notable 30% enhancement in server performance.`,
    ],
    tags: [
      "CSS3",
      "React.js",
      "Laravel",
      "Eloquent(ORM)",
      "MySQL",
      "WordPress",
      "RESTful API",
      "UTA Cloud",
    ],
    githubLink: "https://github.com/trana5197/marketplace-laravelAPI",
  },
  {
    title: "QueryMeter",
    description: [
      `Developed a comprehensive web application using Flask to efficiently handle and fetch data from various datasets, resulting in a 50% reduction in data processing time.`,
      `Deployed the full-stack web app on Microsoft Azure utilizing Azure SQL database services, improving the application's scalability and reliability by 40%.`,
      `Optimized the web app's query fetching efficiency to 68% through Redis caching optimization, making it highly effective in managing diverse datasets.`,
    ],
    tags: [
      "Azure Cloud services",
      "SQL",
      "Database",
      "Caching",
      "Flask",
      "Python",
    ],
    githubLink: "https://github.com/trana5197/QueryMeter",
  },
  {
    title: "Transfer 2022",
    description: [
      `Integrated Twitter API with our application to generate the latest transfer tweets, fetching over 10,000 tweets per day.`,
      `Planned and implemented a user-friendly interface using the Python framework Flask for easy app navigation, resulting in a 25% increase in user experience.`,
      `Utilized the LSTM model to analyze and rate transfer news with 93% accuracy compared to regular text blob and Vader, increasing user credibility.`,
    ],
    tags: ["Tweepy", "Twitter API", "NLP", "Flask", "Python"],
    githubLink: "https://github.com/trana5197/transfer-twitterAPI",
  },
  {
    title: "Portfolio",
    description: [
      `Developed  a  visually  stunning  personal  portfolio  website  using  TypeScript,  Next.js,  Framer  Motion,  Context  API,  and  Tailwind  CSS, 
      boosting user engagement by 40%.`,
      `Implemented media queries to create a responsive design across all devices, resulting in a 50% increase in mobile users.`,
      `Website has been deployed on Vercel using Continuous Deployment (CD) with Git as the version control system. 
      `,
    ],
    tags: ["Typescript", "Tailwind CSS", "Next.js", "GitHub", "Vercel"],
    githubLink: "https://github.com/trana5197/tarun_rana_portfolio_2023",
  },
] as const;

export const skillsData = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "React Query",
  "Express",
  "PostgreSQL",
  "Python",
  "Flask",
  "Framer Motion",
  "R",
  "AWS",
  "Azure",
  "Vercel",
  "Netlify",
  "Thunder Client",
  "PHP",
  "C#",
  "C++",
  "Git",
  "GitHub",
  "Linux",
  "TensorFlow",
  "Keras",
  "MySQL",
  "NumPy",
  "Pandas",
  "Google Colab",
  "Jupyter Notebook",
  "Laravel",
] as const;
