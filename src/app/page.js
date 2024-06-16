"use client"

import { Button } from '@/components/ui/button';
import config from '@/lib/config.json';

export default function Home() {
  return (
      <main className="h-screen items-center justify-between pb-52 pt-32 pl-[18rem] pr-[16rem]">
        <div className="w-full h-full text-sm grid grid-cols-[60%,40%] grid-rows-1">
          <div className="flex flex-col gap-y-8 pt-10">
            <div className="flex items-end row-span-1 col-span-1 text-7xl font-bold">HHS Template Club</div>
            <div className="row-span-1 col-span-1 mr-48 text-xl ">
              Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt 
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
              voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="flex gap-x-5 row-span-1 col-span-1">
              <Button variant='default' size='xl'>
                <a href={config.signup_form}>
                  Sign up now!
                </a>
              </Button>
              <Button variant='outline' size='xl'>
                <a href={config.secondary_button_link}>
                  Secondary button
                </a>
              </Button>
            </div>
          </div>
          <div className="col-span-1 row-span-1">
            Probably a carousel here
          </div>
        </div>
      </main>
  );
}
