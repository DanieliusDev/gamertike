/// <reference types="@solidjs/start/env" />

interface SocialLinkProps {
  title: string;
  href: string;
  icon: import("solid-icons").IconTypes;
}

interface TechCategoryProps {
  title: string;
  children: import("solid-js").JSX.Element;
}

interface TechnologyProps {
  title: string;
  href: string;
  icon: import("solid-icons").IconTypes;
}

interface TypeWriterProps {
  variations: string[];
}

interface HeadingProps {
  children: import("solid-js").JSX.Element;
}

interface LinkProps {
  class?: string;
  href: string;
  newTab?: boolean;
  children: import("solid-js").JSX.Element;
}

interface AccessTokenResponse {
  access_token: string;
}

interface CurrentlyPlayingResponse {
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

interface CurrentlyPlayingData {
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
