"use client";

import Link from "next/link";
import SocialLinks from "./SocialLinks";
import React from "react";

export default function Header() {
  return (
    <header className="sticky p-5 shadow-xl border-b-4 border-blue-500">
      <nav className="flex justify-between max-w-7xl mx-auto">
        <Link
          href="/"
          className="text-blue-500 hover:text-white font-bold hover:bg-blue-500 p-2 rounded-lg text-2xl flex items-center space-x-3 transition ease-in-out"
        >
          {"<Gamertike />"}
        </Link>
        <SocialLinks />
      </nav>
    </header>
  );
}
