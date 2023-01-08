import { AiOutlineLink } from 'react-icons/ai';
import { SiGithub } from 'react-icons/si';

const FeaturedProjects: Project[] = [
	{
		name: 'Guilded.TS',
		description: 'A powerful NPM package for interacting with the Guilded API.',
		repo: 'guildedts/guilded.ts',
		link: 'https://guildedts.js.org',
	},
	{
		name: 'RPS API',
		description: 'A simple RPS API.',
		repo: 'gamertike/rps-api',
		link: 'https://rps.gamertike.com',
	},
	{
		name: 'events.ts',
		description: 'A Deno module that implements typings to the Node.JS event emtter.',
		repo: 'gamertike/events.ts',
		link: 'https://deno.land/x/events_ts',
	},
];

export default function Projects() {
	return (
		<ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-center">
			{FeaturedProjects.map((project, index) => (
				<li
					key={index}
					className="flex flex-col outline outline-1 p-5 rounded-md space-y-2 shadow-xl transition ease-in-out hover:scale-105"
				>
					<h3>{project.name}</h3>
					<p className="flex-grow">{project.description}</p>
					<div className="space-x-3 [&>*]:text-white [&>*]:text-2xl">
						<a
							href={`http://github.com/${project.repo}`}
							target="_blank"
							rel="noreferrer"
						>
							<SiGithub
								className="inline hover:scale-110 transition ease-in-out"
								title="GitHub"
							/>
						</a>
						<a href={project.link} target="_blank" rel="noreferrer">
							<AiOutlineLink
								className="inline hover:scale-110 transition ease-in-out"
								title={project.link}
							/>
						</a>
					</div>
				</li>
			))}
		</ul>
	);
}

interface Project {
	name: string;
	description: string;
	repo: string;
	link: string;
}
