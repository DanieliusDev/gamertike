import { createEffect, createSignal } from "solid-js";

interface TypeWriterProps {
  text: string;
}

const MIN_DELAY_MS = 100;
const MAX_DELAY_MS = 300;

export default function TypeWriter(props: TypeWriterProps) {
  const [index, setIndex] = createSignal(0);

  createEffect(() => {
    // Check whether the text is complete
    if (index() === props.text.length) return;

    // Generate a random delay
    const delayMs =
      Math.floor(Math.random() * (MAX_DELAY_MS - MIN_DELAY_MS)) + MIN_DELAY_MS;

    // Add a character to the text
    setTimeout(() => void setIndex(index() + 1), delayMs);
  });

  return (
    <span class="border-r-8 animate-border-pulse">
      {props.text.slice(0, index())}
    </span>
  );
}
