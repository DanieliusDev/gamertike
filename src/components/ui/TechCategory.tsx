import { type Component } from "solid-js";
import { Link } from "~/components";

export const TechCategory: Component<TechCategoryProps> = (props) => {
  const id = () => props.title.replaceAll(" ", "-").toLowerCase();

  return (
    <li class="bg-zinc-800 p-6 gap-5 rounded-lg space-y-5">
      <Link href={`#${id()}`} class="text-white">
        <h3 id={id()}>{props.title}</h3>
      </Link>
      <ul class="flex flex-wrap justify-evenly gap-8">{props.children}</ul>
    </li>
  );
};
