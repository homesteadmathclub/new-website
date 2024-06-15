"use client"

import Link from "next/link"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "./ModeToggle.jsx"
import { DiscordButton } from "./DiscordButton.jsx"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Navbar() {
  return (
    <nav className="list-none sticky top-0 z-50 w-full py-[0.3rem]">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4">
          <NavigationMenu className="flex space-x-2">
            <NavigationMenuItem className="mr-2 flex items-center justify-center"> {/* Customize club logo and name here! */}
              <Avatar className="mr-3">
                <AvatarImage src="/examplelogo.png" /> 
                <AvatarFallback>HHS</AvatarFallback>
              </Avatar>
              <b>
                <Link href="/" legacyBehavior passHref>
                  Template Club
                </Link>
              </b>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/officers" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Officers
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/meetings" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Meetings
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenu>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <NavigationMenu className="flex space-x-3">
            <NavigationMenuItem>
              <DiscordButton />
            </NavigationMenuItem>
            <NavigationMenuItem>
              <ModeToggle />
            </NavigationMenuItem>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  )
}
