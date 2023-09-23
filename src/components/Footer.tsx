"use client";

import Link from "next/link";
import SocialLinks from "components/SocialLinks";
import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-2 p-5 border-t-4 border-zinc-700">
      <Link className="font-semibold" href="/">
        Gamertike
      </Link>
      <p>A self-taught programmer</p>
      <SocialLinks />
      <a
        href="https://github.com/gamertike/gamertike"
        target="_blank"
        rel="noreferrer"
      >
        View source code
      </a>
      <p>&copy; {new Date().getFullYear()} Danielius Vaisnoras</p>
    </footer>
  );
}
