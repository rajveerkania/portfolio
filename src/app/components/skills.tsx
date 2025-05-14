import React from "react";

const Skills = () => {
  const technicalSkills = [
    {
      name: "Languages",
      description:
        "TypeScript, JavaScript, Python, Java, C, C++, Bash, HTML, CSS, Assembly",
    },
    {
      name: "Frontend",
      description: "Next.js, React, Bootstrap, Tailwind CSS",
    },
    {
      name: "Backend",
      description: "Node.js, Django, REST APIs, OAuth",
    },
    {
      name: "Databases",
      description: "MySQL, MongoDB, PostgreSQL",
    },
    {
      name: "DevOps & Tools",
      description: "AWS, Docker, Git, GitHub, Linux, Postman",
    },
    {
      name: "Other",
      description: "Data Analysis, Version Control, Web Scraping",
    },
  ];

  const competencyLevels = [
    {
      name: "Next.js",
      description: "Unconscious Competence",
    },
    {
      name: "MERN Stack",
      description: "Unconscious Competence",
    },
    {
      name: "Backend with Python",
      description: "Unconscious Competence",
    },
    {
      name: "Cloud with AWS",
      description: "Conscious Competence",
    },
    {
      name: "Bash Scripting",
      description: "Conscious Competence",
    },
    {
      name: "Linux Administration",
      description: "Conscious Competence",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-medium">Technical Skills</h2>
        <ul className="list-inside">
          {technicalSkills.map((skill, index) => (
            <li key={index}>
              <span className="font-medium">{skill.name}:</span>{" "}
              <span>{skill.description}</span>
            </li>
          ))}
        </ul>

        <h3 className="text-xl font-medium mt-4">Competency Levels</h3>
        <ul className="list-inside">
          {competencyLevels.map((skill, index) => (
            <li key={index}>
              <span className="font-medium">{skill.name}</span>{" "}
              <span>({skill.description})</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Skills;
