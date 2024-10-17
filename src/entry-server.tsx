// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={(props) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/logo.jpg" />
          <title>Danielius</title>
          <meta name="description" content="A self-taught programmer." />
          {props.assets}
        </head>
        <body class="bg-zinc-900 text-white">
          <div id="app" class="h-screen flex flex-col">
            {props.children}
          </div>
          {props.scripts}
        </body>
      </html>
    )}
  />
));
