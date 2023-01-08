import { SiNpm, SiTiktok, SiGithub, SiSpotify } from 'react-icons/si';
import { IconType } from 'react-icons';

const FeaturedSocialLinks: SocialLink[] = [
	{
		name: 'GitHub',
		link: '/github',
		Icon: SiGithub,
	},
	{
		name: 'NPM',
		link: '/npm',
		Icon: SiNpm,
	},
	{
		name: 'Spotify',
		link: '/spotify',
		Icon: SiSpotify,
	},
	{
		name: 'TikTok',
		link: '/tiktok',
		Icon: SiTiktok,
	},
];

export default function SocialLinks() {
	return (
		<div className="flex items-center space-x-3 text-2xl">
			{FeaturedSocialLinks.map(({ name, link, Icon }, index) => (
				<a
					key={index}
					href={link}
					target="_blank"
					rel="noreferrer"
					className="text-white hover:scale-110 transition ease-in-out"
				>
					<Icon title={name} />
				</a>
			))}
		</div>
	);
}

interface SocialLink {
	name: string;
	link: string;
	Icon: IconType;
}
