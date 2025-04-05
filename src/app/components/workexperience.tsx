import Link from "next/link"

const WorkExperience = () => {
    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-medium">Work Experience</h2>
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col justify-between gap-1 md:flex-row">
                        <h3 className="font-medium">
                            Software Development Intern <span className="text-primary"><Link href="https://globaleyeintelligence.com" target="_blank">@ Global Eye Intelligence</Link></span>
                        </h3>
                        <p className="italic text-sm">
                            March 2025 - Present
                        </p>
                    </div>
                    <p className="text-justify">
                         Working on Custom Rich Text Editor, Email Server and Modularization 
                    </p>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex flex-col justify-between gap-1 md:flex-row">
                        <h3 className="font-medium">
                            Technical Intern <span className="text-primary"><Link href="https://iamops.io/" target="_blank">@ IAMOPS India</Link></span>
                        </h3>
                        <p className="italic text-sm">
                            Jan 2025 - March 2025
                        </p>
                    </div>
                    <p className="text-justify">
                     Working on cloud infrastructure and automation solutions to improve operational efficiency.
                    </p>
                </div>
                
                {/* Add additional work experiences as needed */}
                {/* 
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col justify-between gap-1 md:flex-row">
                        <h3 className="font-medium">
                            Position <span className="text-primary">@ Company</span>
                        </h3>
                        <p className="italic text-sm">
                            Month Year - Month Year
                        </p>
                    </div>
                    <p className="text-justify">
                        Description of your role and responsibilities.
                    </p>
                </div>
                */}
            </div>
        </div>
    );
};

export default WorkExperience;
