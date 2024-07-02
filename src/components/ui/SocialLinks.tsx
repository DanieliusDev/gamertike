import { type Component } from "solid-js";
import { SocialLink } from "~/components";
import {
  SiDiscord,
  SiGithub,
  SiNpm,
  SiRust,
  SiSpotify,
  SiSteam,
  SiTiktok,
} from "solid-icons/si";

export const SocialLinks: Component = () => {
  return (
    <div class="flex items-center space-x-3 text-2xl">
      <SocialLink title="GitHub" href="/github" icon={SiGithub} />
      <SocialLink title="Crates.io" href="/crates.io" icon={SiRust} />
      <SocialLink title="NPM" href="/npm" icon={SiNpm} />
      <SocialLink title="Spotify" href="/spotify" icon={SiSpotify} />
      <SocialLink title="TikTok" href="/tiktok" icon={SiTiktok} />
      <SocialLink title="Discord" href="/discord" icon={SiDiscord} />
      <SocialLink title="Steam" href="/steam" icon={SiSteam} />
    </div>
  );
};
