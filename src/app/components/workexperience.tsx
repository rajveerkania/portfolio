import Link from "next/link";

const WorkExperience = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-medium">Work Experience</h2>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col justify-between gap-1 md:flex-row">
            <h3 className="font-medium">
              Project Assistant{" "}
              <span className="text-primary">
                <Link href="https://rru.ac.in" target="_blank">
                  @ Technology and Innovation Unit, VCO, RRU
                </Link>
              </span>
            </h3>
            <p className="italic text-sm">September 2025 - Present</p>
          </div>
          <p className="text-justify">
            Managing 8+ local house deployments and infrastructure projects for
            the Vice Chancellor's office, ensuring 99.5% system reliability. Led
            development of NSE Cogencis integration project utilizing Next.js,
            PostgreSQL, Postman for API testing, Ollama for local LLM
            implementation, Nginx for reverse proxy configuration, and AWS for
            cloud deployment. Implemented automated deployment workflows
            reducing setup time by 40% and established robust monitoring systems
            for university technology initiatives.
          </p>
        </div>
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
            <p className="italic text-sm">March 2025 - September 2025</p>
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
      </div>
    </div>
  );
};

export default WorkExperience;
