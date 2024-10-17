"use server";

import {
  NOW_PLAYING_ENDPOINT,
  SPOTIFY_REFRESH_TOKEN,
  SPOTIFY_TOKEN,
  TOKEN_ENDPOINT,
} from "~/constants";

export interface AccessTokenResponse {
  access_token: string;
}

export interface CurrentlyPlayingResponse {
  progress_ms: number;
  is_playing: boolean;
  item: {
    album: {
      external_urls: { spotify: string };
      images: { url: string }[];
    };
    artists: {
      external_urls: { spotify: string };
      name: string;
    }[];
    duration_ms: number;
    name: string;
    type: "track";
  };
  currently_playing_type: "track" | "episode" | "unknown";
}

export interface CurrentlyPlayingData {
  progressMs: number;
  isPlaying: boolean;
  albumImageUrl: string;
  artists: {
    name: string;
    spotifyUrl: string;
  }[];
  durationMs: number;
  spotifyUrl: string;
  trackName: string;
}

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

  return simplifyResponse(data);
}

async function getAccessToken() {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${SPOTIFY_TOKEN}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: SPOTIFY_REFRESH_TOKEN,
    }),
  });
  const data: AccessTokenResponse = await response.json();

  return data.access_token;
}

function simplifyResponse(data: CurrentlyPlayingResponse) {
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
