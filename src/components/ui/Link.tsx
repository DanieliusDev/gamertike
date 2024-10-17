import { JSX } from "solid-js";
import { cn } from "~/util";

export default function Link(
  props: JSX.AnchorHTMLAttributes<HTMLAnchorElement>,
) {
  return (
    <a
      rel="noreferrer noopenner"
      {...props}
      class={cn("hover:brightness-90 text-blue-500 font-semibold", props.class)}
    />
  );
}
