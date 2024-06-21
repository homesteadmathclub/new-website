import Link from 'next/link';
import config from '@/lib/config';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from './ui/button';
import {
	DiscordButton,
	GmailButton,
	InstagramButton,
} from './social-media-buttons';

export default function Footer() {
	return (
		<footer className='bg-background/90 py-6 md:py-6 w-full border-t-[1px] border-stone-900 flex items-center justify-center'>
			<div className='container md:max-w-[90%] flex flex-col items-center justify-between gap-4 md:flex-row mx-auto'>
				<nav className='md:flex items-center grid gap-x-8 md:gap-4 grid-cols-2'>
					<Button asChild variant='ghost'>
						<Link className='text-sm font-medium' href='/'>
							Home
						</Link>
					</Button>
					<Button asChild variant='ghost'>
						<Link className='text-sm font-medium' href='/#about'>
							About
						</Link>
					</Button>
					<Button asChild variant='ghost'>
						<Link className='text-sm font-medium' href='/officers'>
							Officers
						</Link>
					</Button>
					<Button asChild variant='ghost'>
						<Link className='text-sm font-medium' href='/meetings'>
							Meetings
						</Link>
					</Button>
				</nav>
				<nav className='justify-between gap-x-8 md:justify-end md:w-full md:gap-x-2 flex flex-row'>
					<DiscordButton />
					<InstagramButton />
					<GmailButton />
				</nav>
			</div>
		</footer>
	);
}
