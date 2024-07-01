import { type Component } from "solid-js";
import { CurrentlyPlaying, Link, Technologies, TypeWriter } from "~/components";

export const Main: Component = () => {
  return (
    <main class="flex-grow p-8 max-w-5xl w-full mx-auto">
      <div class="flex flex-col lg:flex-row items-center gap-5">
        <p class="text-4xl sm:text-5xl text-center flex-grow">
          Hey, im
          <br />
          <Link href="https://github.com/gamertike">
            <TypeWriter variations={["Gamertike", "Danielius"]} />
          </Link>
          !
        </p>
        <CurrentlyPlaying class="w-full lg:w-3/5" />
      </div>
      <Link href="#about" class="text-white">
        <h2 id="about" class="my-8">
          About me
        </h2>
      </Link>
      <p>
        I{"'"}m a self-taught programmer located in the U.K who loves creating
        and maintaining projects as a hobby. The main programming language i use
        is{" "}
        <Link href="https://typescriptlang.org" newTab>
          TypeScript
        </Link>{" "}
        in combination with{" "}
        <Link href="http://nodejs.org" newTab>
          Node.js
        </Link>{" "}
        but i also love using{" "}
        <Link href="http://rust-lang.org" newTab>
          Rust
        </Link>
        . My preferred IDE is{" "}
        <Link href="https://code.visualstudio.com" newTab>
          Visual Studio Code
        </Link>
        .
      </p>
      <Link href="#technologies" class="text-white">
        <h2 id="technologies" class="my-8">
          Technologies I{"'"}ve used
        </h2>
      </Link>
      <Technologies />
    </main>
  );
};
