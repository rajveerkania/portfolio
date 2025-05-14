import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "SITAICS ERP",
      link: "https://github.com/rajveerkania/SITAICS",
      description:
        "Enterprise Resource Planning System (July 2024 - November 2024)",
    },
    {
      name: "AI Notes App",
      link: "https://github.com/rajveerkania/ai-notes-app",
      description: "AI-Powered Notes Application",
    },
    {
      name: "PriceWise",
      link: "https://github.com/rajveerkania/pricewise",
      description: "Price Comparison Tool (March 2024)",
    },
    {
      name: "termiNews",
      link: "https://github.com/rajveerkania/TermiNews",
      description: "Terminal-based News Aggregator (June 2023)",
    },
    {
      name: "Portfolio",
      link: "https://rajveer.space",
      description: "Personal Website",
    },
    {
      name: "Task Manager",
      link: "https://github.com/rajveerkania/task-manager",
      description: "Web Application",
    },
    {
      name: "Quiz App",
      link: "https://github.com/rajveerkania/quiz-app",
      description: "Web Application",
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-4">
        <h2 className="font-medium text-2xl">Projects</h2>
        <ul className="list-inside">
          {projects.map((project, index) => (
            <li key={index}>
              <a
                href={project.link}
                target="_blank"
                className="text-primary underline italic"
              >
                <span>{project.name}</span>
              </a>{" "}
              | <span>{project.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Projects;
