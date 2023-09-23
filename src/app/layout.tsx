import "./globals.css";
import Footer from "components/Footer";
import Header from "components/Header";
import clsx from "clsx";
import { Montserrat } from "next/font/google";
import { Metadata } from "next";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gamertike",
  description: "A self-taught programmer.",
  icons: "logo.jpg",
};

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={clsx("flex flex-col h-screen", montserrat.className)}>
        <Header />
        <main className="flex-grow p-8 max-w-5xl w-full mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
