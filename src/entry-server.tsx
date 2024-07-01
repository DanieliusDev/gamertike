// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/logo.jpg" />
          <title>Gamertike</title>
          <meta name="description" content="A self-taught programmer." />
          {assets}
        </head>
        <body class="h-screen">
          <div id="app" class="h-full flex flex-col">
            {children}
          </div>
          {scripts}
        </body>
      </html>
    )}
  />
));
