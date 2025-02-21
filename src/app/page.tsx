import Image from 'next/image';
import type { Metadata } from 'next'
import Education from './components/education';
import Projects from './components/projects';
import Inprogress from './components/inprogress';
import Skills from './components/skills';
import Social from './components/social';
import Avatar from '../../assets/rajveer.jpg';


const Page = () => {

	return (
		<div className="flex flex-col gap-8 mx-4 my-16 md:mx-0">
			<div className="flex flex-col-reverse gap-8 md:flex-row">
				<div className="flex flex-col gap-4">
					<h1 className="text-4xl font-medium">
						Rajveer <span className="text-primary">Kania</span>
					</h1>
					<p>
						Technical Intern | <span className="font-bold">IAMOPS India | Open Source</span> <span className="px-2 py-1 text-xs rounded-md text-primary bg-primary/10">
							<span>NEW</span>
						</span>
					</p>
					<p>Namaste!</p>
					<p className="text-justify">
            I'm Rajveer Kania, an undergraduate Computer Science & Engineering student in India, passionate about cloud computing, distributed systems,
            and backend development. I enjoy exploring Physics and Computer Networks, playing chess, and unwinding with badminton.
					</p>
				</div>
				<Image
					src={Avatar}
					alt="Rajveer Kania"
					className="object-cover w-auto h-32 md:w-32 md:h-auto grayscale"
					width={300}
					height={300}
					placeholder='blur'
				/>
			</div>
			<div className="flex gap-2">
				<div className="px-2 text-sm rounded-md text-primary bg-primary/10" aria-label="DoB: 2002AD">
					2002
				</div>
				<div className="px-2 text-sm rounded-md text-primary bg-primary/10" aria-label="Height: 6 feet and 3 inches">
					<span>6'3''</span>
				</div>
				<div className="px-2 text-sm rounded-md text-primary bg-primary/10" aria-label="Resume">
          <a href="https://drive.usercontent.google.com/download?id=1gHGTQpkqni8Jo4R6A_dL5aqj8i_gAVea&export=download&authuser=0&confirm=t&uuid=1f629c4d-5709-438e-bd5d-d8639d64b441&at=AEz70l6bSRsTPG_oGVagZbT5ixgn:1740087883127" target="_blank">Resume</a>
				</div>
			</div>

			<Education />

			<Projects />

			<Inprogress />

			<Skills />

			<Social />

			<div className="flex flex-col gap-4">
				<h2 className="text-2xl font-medium">Contact</h2>
				<ul className="list-inside">
					<li>
						<span>{'email: '}</span>
						<a href="mailto:rajveerkania02@gmail.com" className="italic underline text-primary">
							rajveerkania02@gmail.com
						</a>
					</li>
				</ul>
			</div>

			<p className="text-xs">
				{'Rajveer Kania ' + new Date().getFullYear()}
        </p>
		</div>
	);
};

export default Page;
