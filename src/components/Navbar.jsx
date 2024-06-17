import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
	SheetTrigger,
	SheetContent,
	Sheet,
	SheetClose,
} from '@/components/ui/sheet';
import { ModeToggle } from './ModeToggle';
import { DiscordButton } from './DiscordButton';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import config from '@/lib/config';

export function Navbar() {
	return (
		<header className='w-[100svw] bg-white/70 dark:bg-stone-950/70 border-b-[1px] border-stone-900 sticky top-0 rounded-b-sm backdrop-blur-3xl'>
			<div className='container mx-auto flex h-16 items-center justify-between py-10'>
				<div className='flex flex-row items-center w-full'>
					<Link className='flex items-center gap-2' href='/'>
						<Avatar className='size-10'>
							<AvatarImage src='/logo.png' />
							<AvatarFallback>HHS</AvatarFallback>
						</Avatar>
						<span className='text-lg font-semibold'>
							{config.club_name}
						</span>
					</Link>
					<nav className='hidden lg:flex items-start gap-4'>
						<Link
							className='text-sm font-medium hover:underline underline-offset-4'
							href='/about'
						>
							About
						</Link>
						<Link
							className='text-sm font-medium hover:underline underline-offset-4'
							href='/officers'
						>
							Officers
						</Link>
						<Link
							className='text-sm font-medium hover:underline underline-offset-4'
							href='/meetings'
						>
							Meetings
						</Link>
					</nav>
				</div>
				<div>
					<div className='items-center gap-2 hidden lg:inline-flex'>
						<DiscordButton />
						<ModeToggle />
					</div>
					<Sheet>
						<SheetTrigger asChild>
							<Button
								className='lg:hidden'
								size='icon'
								variant='ghost'
							>
								<MenuIcon className='h-6 w-6' />
								<span className='sr-only'>Toggle menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent
							className='bg-white dark:bg-stone-950'
							side='left'
						>
							<div className='flex items-center justify-between px-4 py-4'>
								<Link
									className='flex items-center gap-2'
									href='#'
								>
									<Avatar>
										<AvatarImage src='/logo.png' />
										<AvatarFallback>HHS</AvatarFallback>
									</Avatar>
									<span className='text-lg font-semibold'>
										{config.club_name}
									</span>
								</Link>
								<SheetClose>
									<Button
										className='lg:hidden'
										size='icon'
										variant='ghost'
									>
										<XIcon className='h-6 w-6' />
										<span className='sr-only'>
											Close menu
										</span>
									</Button>
								</SheetClose>
							</div>
							<nav className='grid gap-2 px-4 py-6'>
								<Link
									className='flex items-center gap-2 rounded-md py-2 px-3 text-sm font-medium hover:bg-stone-100 dark:hover:bg-stone-800'
									href='/about'
								>
									About
								</Link>
								<Link
									className='flex items-center gap-2 rounded-md py-2 px-3 text-sm font-medium hover:bg-stone-100 dark:hover:bg-stone-800'
									href='/officers'
								>
									Officers
								</Link>
								<Link
									className='flex items-center gap-2 rounded-md py-2 px-3 text-sm font-medium hover:bg-stone-100 dark:hover:bg-stone-800'
									href='/meetings'
								>
									Meetings
								</Link>
							</nav>
							<div className='px-4 py-4'>
								<DiscordButton />
								<ModeToggle />
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}

function MenuIcon(props) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<line x1='4' x2='20' y1='12' y2='12' />
			<line x1='4' x2='20' y1='6' y2='6' />
			<line x1='4' x2='20' y1='18' y2='18' />
		</svg>
	);
}

function XIcon(props) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<path d='M18 6 6 18' />
			<path d='m6 6 12 12' />
		</svg>
	);
}
