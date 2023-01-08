import 'styles.css';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import React from 'react';
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function Layout({ children }: React.PropsWithChildren) {
	return (
		<html lang="en">
			<head />
			<body className={`flex flex-col h-screen ${montserrat.className}`}>
				<Navbar />
				<main className="flex-grow">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
