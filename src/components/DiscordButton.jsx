"use client"
 
import * as React from "react"
import { Button } from "@/components/ui/button"
import { SiDiscord } from 'react-icons/si';

 
export function DiscordButton() { 
  return (
    <Button variant="outline" size="icon">
      <a href="https://discord.gg/YOUR_SERVER_HERE">
        <SiDiscord  className="text-[1.35rem] text-[#5865F2]" />
        <span className="sr-only">Join Discord</span>
      </a>
    </Button>
  )
}