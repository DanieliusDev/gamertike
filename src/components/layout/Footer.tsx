import Link from "../ui/Link";
import SocialLinks from "../ui/SocialLinks";

export const SOURCE_CODE_URL = "https://github.com/DanieliusDev/DanieliusDev";

export default function Footer() {
  return (
    <footer class="flex flex-col items-center gap-2 p-5 border-t-4 border-zinc-700">
      <Link class="font-semibold" href="/">
        Danielius Vaisnoras
      </Link>
      <p>A self-taught programmer</p>
      <SocialLinks />
      <Link href={SOURCE_CODE_URL} target="_blank">
        View source code
      </Link>
      <p>&copy; 2023-{new Date().getFullYear()} Danielius Vaisnoras</p>
    </footer>
  );
}
