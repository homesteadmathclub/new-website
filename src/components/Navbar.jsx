'use client';

import react from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import config from '@/lib/config';

import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from '@/components/ui/sheet';
import { DiscordButton, InstagramButton } from './social-media-buttons';
import { ModeToggle } from './mode-toggle';
import { IoClose, IoMenu } from 'react-icons/io5';

export default function Navbar() {
	const [open, setOpen] = react.useState(false);
	return (
		<nav className='z-50 w-[100svw] bg-white/80 dark:bg-stone-950/80 border-b-[1px] border-stone-900 sticky top-0 rounded-b-sm backdrop-blur-3xl'>
			<div className='container mx-auto flex h-16 items-center justify-between py-10'>
				<div className='flex flex-row items-center w-full gap-3'>
					<Link className='flex items-center gap-3' href='/'>
						<Avatar className='size-10'>
							<AvatarImage src='/logo.png' />
							<AvatarFallback>HHS</AvatarFallback>
						</Avatar>
						<span className='text-lg font-semibold'>
							{config.club_name}
						</span>
					</Link>
					<nav className='hidden lg:flex items-start gap-1'>
						<Button asChild variant='ghost'>
							<Link
								className='text-sm font-medium'
								href='/#about'
							>
								About
							</Link>
						</Button>
						<Button asChild variant='ghost'>
							<Link
								className='text-sm font-medium'
								href='/officers'
							>
								Officers
							</Link>
						</Button>
						<Button asChild variant='ghost'>
							<Link
								className='text-sm font-medium'
								href='/meetings'
							>
								Meetings
							</Link>
						</Button>
					</nav>
				</div>
				<div>
					<div className='items-center gap-2 hidden lg:inline-flex'>
						<InstagramButton />
						<DiscordButton />
						<ModeToggle />
					</div>
					<Sheet onOpenChange={setOpen} open={open}>
						<SheetTrigger asChild>
							<Button
								className='lg:hidden'
								size='icon'
								variant='ghost'
							>
								<IoMenu className='h-6 w-6' />
								<span className='sr-only'>Toggle menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent
							className='bg-white dark:bg-stone-950'
							side='left'
						>
							<div className='flex items-center justify-between py-4'>
								<MobileLink onOpenChange={setOpen} href='/'>
									<Avatar>
										<AvatarImage src='/logo.png' />
										<AvatarFallback>HHS</AvatarFallback>
									</Avatar>
									<span className='text-lg font-semibold'>
										{config.club_name}
									</span>
								</MobileLink>

								<SheetClose>
									<Button
										className='lg:hidden'
										size='icon'
										variant='ghost'
									>
										<IoClose className='h-6 w-6' />
										<span className='sr-only'>
											Close menu
										</span>
									</Button>
								</SheetClose>
							</div>
							<nav className='flex flex-col h-[90%] justify-between'>
								<div className='grid gap-2 py-6'>
									<MobileLink
										onOpenChange={setOpen}
										href='/#about'
									>
										About
									</MobileLink>
									<MobileLink
										onOpenChange={setOpen}
										href='/officers'
									>
										Officers
									</MobileLink>
									<MobileLink
										onOpenChange={setOpen}
										href='/meetings'
									>
										Meetings
									</MobileLink>
								</div>
								<div className=' py-4 flex flex-row gap-2'>
									<InstagramButton />
									<DiscordButton />
									<ModeToggle />
								</div>
							</nav>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</nav>
	);
}

function MobileLink({ href, onOpenChange, className, children, ...props }) {
	const router = useRouter();
	return (
		<Link
			href={href}
			onClick={() => {
				router.push(href.toString());
				onOpenChange?.(false);
			}}
			className={cn(
				'flex items-center gap-2 rounded-md py-2 px-3 text-lg font-medium hover:bg-stone-100 dark:hover:bg-stone-800'
			)}
			{...props}
		>
			{children}
		</Link>
	);
}
