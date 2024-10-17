import { JSX } from "solid-js";

import Link from "./Link";

interface HeadingProps {
  id: string;
  children: JSX.Element;
}

export default function Heading(props: HeadingProps) {
  return (
    <Link href={`#${props.id}`}>
      <h2
        id={props.id}
        class="text-white my-8 pb-2 border-b-2 border-zinc-700 text-3xl"
      >
        {props.children}
      </h2>
    </Link>
  );
}
