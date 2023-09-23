"use client";

import { useEffect, useState } from "react";

export default function TypeWritter({ variations }: TypeWritterProps) {
  const [variation, setVariation] = useState(0);
  const [index, setIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === variations[variation].length && !reverse)
      return void setTimeout(() => setReverse(true), 2_000);
    if (index === 0 && reverse) {
      setReverse(false);
      setVariation((variation + 1) % variations.length);
      return;
    }
    setTimeout(
      () => {
        setIndex(reverse ? index - 1 : index + 1);
      },
      reverse ? 50 : 200,
    );
  }, [index, variations, variation, reverse]);

  return (
    <span className="border-r-8 animate-border-pulse">
      {variations[variation].slice(0, index)}
    </span>
  );
}

interface TypeWritterProps {
  variations: string[];
}
