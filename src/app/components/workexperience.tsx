import Link from "next/link";

const WorkExperience = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-medium">Work Experience</h2>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col justify-between gap-1 md:flex-row">
            <h3 className="font-medium">
              Software Development Intern{" "}
              <span className="text-primary">
                <Link href="https://globaleyeintelligence.com" target="_blank">
                  @ Global Eye Intelligence
                </Link>
              </span>
            </h3>
            <p className="italic text-sm">April 2025 - Present</p>
          </div>
          <p className="text-justify">
            Led front-end development with a focus on modular component design,
            improving maintainability and scalability. Developed a secure
            payment webpage, enhancing transactional functionality. Implemented
            a custom rich-text editor for streamlined content creation and built
            a robust web scraping system utilizing RSS feeds and multiprocessing
            to aggregate data from global news editorials and government
            websites.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col justify-between gap-1 md:flex-row">
            <h3 className="font-medium">
              Technical Intern{" "}
              <span className="text-primary">
                <Link href="https://iamops.io/" target="_blank">
                  @ IAMOPS India
                </Link>
              </span>
            </h3>
            <p className="italic text-sm">January 2025 - March 2025</p>
          </div>
          <p className="text-justify">
            Gained hands-on experience in Nginx, Apache hosting, AWS Cloud
            Practitioner concepts, and server management. Configured 10+
            environments, optimized deployment processes, and explored cloud
            computing while enhancing understanding of network security,
            infrastructure management, and best practices for scalable, secure
            deployments.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col justify-between gap-1 md:flex-row">
            <h3 className="font-medium">
              Research Intern{" "}
              <span className="text-primary">
                <Link href="https://rru.ac.in" target="_blank">
                  @ School of Behavioral Science and Forensic Studies
                </Link>
              </span>
            </h3>
            <p className="italic text-sm">April 2024 - May 2024</p>
          </div>
          <p className="text-justify">
            Engineered an interactive behavioral analysis tool using React.js
            and Google Sheets API, creating a quiz that captured over 1,000 user
            responses to identify key behavior patterns for product improvement.
            Implemented real-time data analysis and visualization of quiz
            results for enhanced insights into user behavior.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
