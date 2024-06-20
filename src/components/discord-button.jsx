"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { SiDiscord } from "react-icons/si";
import config from "@/lib/config.js";

export function DiscordButton() {
  return (
    <Button variant="outline" size="icon">
      <a href={config.discord_url}>
        <SiDiscord className="text-[1.35rem] text-[#5865F2]" />
        <span className="sr-only">Join Discord Server</span>
      </a>
    </Button>
  );
}
