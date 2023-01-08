/**
 * @type {import('next').NextConfig}
 */
module.exports = {
	experimental: {
		appDir: true,
	},
	async redirects() {
		return [
			{ source: '/github', destination: 'https://github.com/gamertike', permanent: false },
			{ source: '/npm', destination: 'https://npmjs.com/~gamertike', permanent: false },
			{ source: '/tiktok', destination: 'https://tiktok.com/@gamertike', permanent: false },
			{
				source: '/spotify',
				destination: 'https://open.spotify.com/user/danbff203',
				permanent: false,
			},
		];
	},
};
