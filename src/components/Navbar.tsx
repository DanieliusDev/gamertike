'use client';

import Link from 'next/link';
import SocialLinks from 'components/SocialLinks';
import Image from 'next/image';
import React from 'react';

export default function Navbar() {
	return (
		<header>
			<nav className="flex justify-between max-w-7xl mx-auto">
				<Link href="/" className="text-white flex items-center space-x-3">
					<span className="rounded-full overflow-hidden">
						<Image src="/logo.jpg" alt="Gamertike" width={32} height={32} />
					</span>
					<span className="text-2xl">Gamertike</span>
				</Link>
				<SocialLinks />
			</nav>
		</header>
	);
}
