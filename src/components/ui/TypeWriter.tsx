import { type Component, createEffect, createSignal } from "solid-js";

export const TypeWriter: Component<TypeWriterProps> = (props) => {
  const [variation, setVariation] = createSignal(0);
  const [index, setIndex] = createSignal(0);
  const [reverse, setReverse] = createSignal(false);

  createEffect(() => {
    // Check whether the current variation's typing animation is finished
    // and if so, start the deleting animation
    if (index() === props.variations[variation()].length && !reverse())
      return void setTimeout(() => setReverse(true), 2_000);
    // Check whether the current variation's deleting animation is finished
    // and if so, start typing animation for the next variation
    if (index() === 0 && reverse()) {
      setReverse(false);
      return void setVariation((variation() + 1) % props.variations.length);
    }
    // Add or remove a character from the current variation
    setTimeout(
      () => void setIndex(reverse() ? index() - 1 : index() + 1),
      reverse() ? 50 : 200,
    );
  });

  return (
    <span class="border-r-8 animate-border-pulse">
      {props.variations[variation()].slice(0, index())}
    </span>
  );
};
