import { type Component } from "solid-js";
import { Link } from "~/components";

export const Technology: Component<TechnologyProps> = (props) => {
  return (
    <li>
      <Link
        href={props.href}
        class="text-6xl lg:text-7xl text-white hover:scale-110 transition ease-in-out hover:text-blue-500"
        newTab
      >
        <props.icon title={props.title} />
      </Link>
    </li>
  );
};
