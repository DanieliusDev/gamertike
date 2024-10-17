// use in server side only!

export const NOW_PLAYING_ENDPOINT =
  "https://api.spotify.com/v1/me/player/currently-playing";
export const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

export const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID!;
export const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET!;
export const SPOTIFY_REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN!;

if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET || !SPOTIFY_REFRESH_TOKEN)
  throw new Error("Missing Spotify credentials");

export const SPOTIFY_TOKEN = Buffer.from(
  `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`,
).toString("base64");
