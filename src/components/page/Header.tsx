import { type Component } from "solid-js";
import { SocialLinks, Link } from "~/components";

export const Header: Component = () => {
  return (
    <header class="sticky p-5 shadow-xl border-b-4 border-blue-500">
      <nav class="flex flex-col sm:flex-row gap-4 items-center justify-between max-w-7xl mx-auto">
        <Link
          href="/"
          class="text-blue-500 hover:text-white font-bold hover:bg-blue-500 p-2 rounded-lg text-2xl flex items-center space-x-3 transition ease-in-out"
        >
          {"<Gamertike />"}
        </Link>
        <SocialLinks />
      </nav>
    </header>
  );
};
