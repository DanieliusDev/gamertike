import { IconType } from "react-icons";
import {
  SiJavascript,
  SiTypescript,
  SiRust,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiDeno,
  SiHtml5,
  SiCss3,
  SiGit,
  SiVuedotjs,
  SiTailwindcss,
  SiMongodb,
  SiVisualstudiocode,
} from "react-icons/si";

const FeaturedTechnologies: Technology[] = [
  {
    name: "Visual Studio Code",
    Icon: SiVisualstudiocode,
    link: "https://code.visualstudio.com",
  },
  {
    name: "JavaScript",
    Icon: SiJavascript,
    link: "https://javascript.com",
  },
  {
    name: "TypeScript",
    Icon: SiTypescript,
    link: "https://typescriptlang.org",
  },
  {
    name: "Rust",
    Icon: SiRust,
    link: "https://rust-lang.org",
  },
  {
    name: "React.js",
    Icon: SiReact,
    link: "https://reactjs.org",
  },
  {
    name: "Next.js",
    Icon: SiNextdotjs,
    link: "https://nextjs.org",
  },
  {
    name: "Node.js",
    Icon: SiNodedotjs,
    link: "https://nodejs.org",
  },
  {
    name: "Deno",
    Icon: SiDeno,
    link: "https://deno.land",
  },
  {
    name: "HTML",
    Icon: SiHtml5,
    link: "https://w3schools.com/html",
  },
  {
    name: "CSS",
    Icon: SiCss3,
    link: "https://w3schools.com/css",
  },
  {
    name: "GIT",
    Icon: SiGit,
    link: "https://git-scm.com",
  },
  {
    name: "Vue.js",
    Icon: SiVuedotjs,
    link: "https://vuejs.org/",
  },
  {
    name: "Tailwind CSS",
    Icon: SiTailwindcss,
    link: "https://tailwindcss.com",
  },
  {
    name: "MongoDB",
    Icon: SiMongodb,
    link: "https://mongodb.com",
  },
];

export default function Technologies() {
  return (
    <ul className="flex flex-wrap gap-8 justify-evenly">
      {FeaturedTechnologies.map(({ name, Icon, link }, index) => (
        <a
          key={index}
          href={link}
          target="_blank"
          rel="noreferrer"
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white hover:scale-110 transition ease-in-out hover:text-blue-500"
        >
          <Icon title={name} />
        </a>
      ))}
    </ul>
  );
}

export interface Technology {
  name: string;
  Icon: IconType;
  link: string;
}
