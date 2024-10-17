import Link from "../ui/Link";
import SocialLinks from "../ui/SocialLinks";

export default function Header() {
  return (
    <header class="sticky p-5 shadow-xl border-b-4 border-blue-500">
      <nav class="flex flex-col sm:flex-row gap-4 items-center justify-between max-w-7xl mx-auto">
        <Logo />
        <SocialLinks />
      </nav>
    </header>
  );
}

function Logo() {
  return (
    <Link
      href="/"
      class="text-blue-500 hover:text-white font-bold hover:bg-blue-500 p-2 rounded-lg text-2xl flex items-center space-x-3 transition ease-in-out"
    >
      {"<Danielius />"}
    </Link>
  );
}
