import React from "react";

const Social = () => {
  const social = [
    {
      name: "Github",
      link: "https://github.com/rajveerkania/",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/rajveer02/",
    },
    {
      name: "Portfolio",
      link: "https://rajveer.space",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/rajveerkania/",
    },
  ];

  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-medium text-2xl">Social</h2>
      <div className="flex flex-wrap gap-2 text-primary">
        {social.map((item, index) => (
          <React.Fragment key={index}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="underline italic"
            >
              {item.name}
            </a>
            {index !== social.length - 1 && <span className="px-2">|</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Social;
