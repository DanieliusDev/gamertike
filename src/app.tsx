import "~/app.css";
import { type Component } from "solid-js";
import { Header, Main, Footer } from "~/components";

export default (() => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}) satisfies Component;
