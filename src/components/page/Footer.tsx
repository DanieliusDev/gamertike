import { type Component } from "solid-js";
import { SocialLinks, Link } from "~/components";

export const Footer: Component = () => {
  return (
    <footer class="flex flex-col items-center gap-2 p-5 border-t-4 border-zinc-700">
      <Link class="font-semibold" href="/">
        Gamertike
      </Link>
      <p>A self-taught programmer</p>
      <SocialLinks />
      <Link href="https://github.com/gamertike/gamertike" newTab>
        View source code
      </Link>
      <p>&copy; {new Date().getFullYear()} Danielius Vaisnoras</p>
    </footer>
  );
};
