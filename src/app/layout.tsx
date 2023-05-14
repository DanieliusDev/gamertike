import './globals.css';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import React from 'react';
import clsx from 'clsx';
import { Montserrat } from 'next/font/google';
import { Metadata } from 'next';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Gamertike',
	description: 'A self-taught programmer.',
	icons: 'logo.jpg',
};

export default function Layout({ children }: React.PropsWithChildren) {
	return (
		<html lang="en">
			<head />
			<body className={clsx('flex flex-col h-screen', montserrat.className)}>
				<Navbar />
				<main className="flex-grow">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
