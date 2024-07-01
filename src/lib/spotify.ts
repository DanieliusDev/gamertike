"use server";

import { NOW_PLAYING_ENDPOINT, TOKEN_ENDPOINT } from "~/constants";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

if (!client_id || !client_secret || !refresh_token)
  throw new Error("Missing Spotify credentials");

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

// Use arrow function to avoid hoisting
const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });
  const data: AccessTokenResponse = await response.json();

  return data.access_token;
};

export async function getCurrentlyPlaying(): Promise<CurrentlyPlayingData | null> {
  const accessToken = await getAccessToken();
  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (response.status !== 200) return null;

  const data: CurrentlyPlayingResponse = await response.json();

  if (data.currently_playing_type !== "track") return null;

  return {
    progressMs: data.progress_ms,
    isPlaying: data.is_playing,
    albumImageUrl: data.item.album.images[0].url,
    artists: data.item.artists.map((artist) => ({
      name: artist.name,
      spotifyUrl: artist.external_urls.spotify,
    })),
    durationMs: data.item.duration_ms,
    spotifyUrl: data.item.album.external_urls.spotify,
    trackName: data.item.name,
  };
}
