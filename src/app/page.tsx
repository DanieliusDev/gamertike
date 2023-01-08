import Projects from 'components/Projects';
import Technologies from 'components/Technologies';

export default async function Page() {
	return (
		<>
			<h1 className="text-center">
				Hey, im <a href="https://github.com/gamertike">Gamertike</a>!
			</h1>
			<a href="#about" className="text-white">
				<h2 id="about" className="my-6">
					About me
				</h2>
			</a>
			<p>
				I{"'"}m a self-taught programmer located in the U.K who loves creating and
				maintaining projects as a hobby. The main programming language i use is{' '}
				<a href="https://typescriptlang.org" target="_blank" rel="noreferrer">
					TypeScript
				</a>{' '}
				in combination with{' '}
				<a href="http://nodejs.org" target="_blank" rel="noreferrer">
					Node.js
				</a>
				. My preferred IDE is{' '}
				<a href="https://code.visualstudio.com" target="_blank" rel="noreferrer">
					Visual Studio Code
				</a>
				.
			</p>
			<a href="#projects" className="text-white">
				<h2 id="projects" className="my-6">
					Featured Projects
				</h2>
			</a>
			<Projects />
			<a href="#technologies" className="text-white">
				<h2 id="technologies" className="my-6">
					Technologies I{"'"}ve used
				</h2>
			</a>
			<Technologies />
		</>
	);
}
