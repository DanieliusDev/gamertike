import { type Component } from "solid-js";

export const Link: Component<LinkProps> = (props) => {
  return (
    <a
      class={props.class}
      href={props.href}
      target={props.newTab ? "_blank" : "_self"}
      rel="noreferrer"
    >
      {props.children}
    </a>
  );
};
