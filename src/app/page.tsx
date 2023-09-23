import Technologies from "components/Technologies";
import TypeWritter from "components/TypeWritter";

export default async function Page() {
  return (
    <>
      <h1 className="text-center sm:text-5xl">
        Hey, im{" "}
        <a href="https://github.com/gamertike">
          <TypeWritter variations={["Gamertike", "Danielius"]} />
        </a>
        !
      </h1>
      <a href="#about" className="text-white">
        <h2 id="about" className="my-6">
          About me
        </h2>
      </a>
      <p>
        I{"'"}m a self-taught programmer located in the U.K who loves creating
        and maintaining projects as a hobby. The main programming language i use
        is{" "}
        <a href="https://typescriptlang.org" target="_blank" rel="noreferrer">
          TypeScript
        </a>{" "}
        in combination with{" "}
        <a href="http://nodejs.org" target="_blank" rel="noreferrer">
          Node.js
        </a>{" "}
        but i also love using{" "}
        <a href="http://rust-lang.org" target="_blank" rel="noreferrer">
          Rust
        </a>
        . My preferred IDE is{" "}
        <a
          href="https://code.visualstudio.com"
          target="_blank"
          rel="noreferrer"
        >
          Visual Studio Code
        </a>
        .
      </p>
      <a href="#technologies" className="text-white">
        <h2 id="technologies" className="my-6">
          Technologies I{"'"}ve used
        </h2>
      </a>
      <Technologies />
    </>
  );
}
