import React from "react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Rashtriya Raksha University",
      date: "October 2021 - May 2025",
      details: "CGPA: 8.18 | Rank 1",
    },
    {
      degree: "Higher Secondary Education",
      institution: "Gujarat Secondary Education Board",
      date: "2018 - 2020",
    },
    {
      degree: "Secondary Education",
      institution: "Gujarat Secondary Education Board",
      date: "2016 - 2018",
    },
  ];

  const courses = [
    {
      name: "GATE Qualification - 2024 & 2025 (96.5 Percentile - Top 3.5%)",
      date: "March 2024 | March 2025",
    },
    {
      name: "Cloud Computing (IIT Kharagpur)",
      date: "April 2024",
    },
    {
      name: "Open Source Software Development, Linux and Git (The Linux Foundation)",
      date: "May 2023",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-4">
        <h2 className="font-medium text-2xl">Education</h2>
        <ul className="list-inside">
          {education.map((degree, index) => (
            <li key={index}>
              <span className="font-medium">{degree.degree}</span> |{" "}
              <span>{degree.institution}</span> | <span>{degree.date}</span>
              {degree.details && (
                <span>
                  {" "}
                  | <span className="text-primary">{degree.details}</span>
                </span>
              )}
            </li>
          ))}
        </ul>

        <h3 className="font-medium text-xl mt-4">Courses and Accreditations</h3>
        <ul className="list-inside">
          {courses.map((course, index) => (
            <li key={index}>
              <span className="font-medium">{course.name}</span> |{" "}
              <span>{course.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Education;
