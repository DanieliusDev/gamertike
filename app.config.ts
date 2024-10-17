import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  solid: {
    babel: {
      // Fixes babel de-optimized warning
      compact: true,
    },
  },
  server: {
    preset: "vercel",
    routeRules: {
      "/github": { redirect: "https://github.com/DanieliusDev" },
      "/crates.io": { redirect: "https://crates.io/users/DanieliusDev" },
      "/npm": { redirect: "https://npmjs.com/~gamertike" },
      "/spotify": { redirect: "https://open.spotify.com/user/danbff203" },
      "/tiktok": { redirect: "https://tiktok.com/@danielius.dev" },
      "/discord": { redirect: "https://discord.com/users/475425276591996939" },
      "/steam": { redirect: "https://steamcommunity.com/id/DanieliusDev" },
    },
  },
});
