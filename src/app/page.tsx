"use client";

import Image from "next/image";
import Education from "@/app/components/education";
import Projects from "@/app/components/projects";
import Inprogress from "@/app/components/inprogress";
import Skills from "@/app/components/skills";
import Social from "@/app/components/social";
import WorkExperience from "@/app/components/workexperience";
import Avatar from "../../assets/rajveer.jpg";

const Page = () => {
  return (
    <div className="flex flex-col gap-8 mx-4 my-16 md:mx-0">
      <div className="flex flex-col-reverse gap-8 md:flex-row">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-medium">
            Rajveer <span className="text-primary">P. Kania</span>
          </h1>
          <p>
            B.Tech Computer Science Student (Rank 1) |{" "}
            <span className="font-bold">Open Source Contributor</span> |{" "}
            <span className="font-bold text-primary">
              GATE CSE 2024 & 2025 Qualified (96.5 Percentile - Top 3.5%)
            </span>
          </p>
          <p>Namaste!</p>
          <p className="text-justify">
            I'm Rajveer Kania, an undergraduate Computer Science student at
            Rashtriya Raksha University, passionate about cloud computing,
            distributed systems, and full-stack development. Currently working
            as a Software Development Intern at Global Eye Intelligence,
            focusing on modular component design and custom solutions.
          </p>
        </div>
        <Image
          src={Avatar}
          alt="Rajveer Kania"
          className="object-cover w-auto h-32 md:w-32 md:h-auto grayscale"
          width={300}
          height={300}
          placeholder="blur"
        />
      </div>

      <div className="flex gap-2">
        <div
          className="px-2 text-sm rounded-md text-primary bg-primary/10"
          aria-label="DoB: 2002AD"
        >
          2002
        </div>
        <div
          className="px-2 text-sm rounded-md text-primary bg-primary/10"
          aria-label="Height: 6 feet and 3 inches"
        >
          <span>6'3''</span>
        </div>
        <div
          className="px-2 text-sm rounded-md text-primary bg-primary/10"
          aria-label="Resume"
        >
          <a
            href="https://drive.google.com/file/d/1yBQh92LDSv_lzHmr4H-gSf9ndGSE1Kjb"
            target="_blank"
          >
            Resume
          </a>
        </div>
      </div>

      <WorkExperience />
      <Education />
      <Projects />
      <Inprogress />
      <Skills />
      <Social />

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-medium">Contact</h2>
        <ul className="list-inside">
          <li>
            <span>{"email: "}</span>
            <a
              href="mailto:rajveerkania02@gmail.com"
              className="italic underline text-primary"
            >
              rajveerkania02@gmail.com
            </a>
          </li>
          <li>
            <span>{"phone: "}</span>
            <span className="text-primary">+91 97242 67506</span>
          </li>
          <li>
            <span>{"location: "}</span>
            <span className="text-primary">Surat, Gujarat</span>
          </li>
        </ul>
      </div>

      <p className="text-xs">{"Rajveer Kania " + new Date().getFullYear()}</p>
    </div>
  );
};

export default Page;
