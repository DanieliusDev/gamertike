import { type Component } from "solid-js";
import { Link } from "~/components";

export const SocialLink: Component<SocialLinkProps> = (props) => {
  return (
    <Link
      href={props.href}
      class="text-white hover:text-blue-500 hover:scale-110 transition ease-in-out"
      newTab
    >
      <props.icon title={props.title} />
    </Link>
  );
};
