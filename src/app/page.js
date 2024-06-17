'use client';

import { Button } from '@/components/ui/button';
import config from '@/lib/config.js';
import {
	Carousel,
	CarouselContent,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { CarouselImageCard } from '@/components/CarouselImageCard';

export default function Home() {
	return (
		<main className='min-h-[90dvh] w-[85%] lg:w-[80%] mx-auto lg:pt-[10dvh]'>
			<div className='w-full h-full text-sm lg:grid lg:grid-cols-[55%,10%,35%] items-center justify-center'>
				<div className='flex flex-col gap-y-8 pt-10'>
					<div className='flex items-end text-7xl font-bold'>
						{config.club_name}
					</div>
					<div className='text-xl '>
						{config.home_page.description}
					</div>
					<div className='flex gap-5 flex-col lg:flex-row'>
						<Button variant='default' size='xl'>
							<a href={config.signup_form}>Sign up now!</a>
						</Button>
						{config.home_page.secondary_button.display && (
							<Button variant='outline' size='xl'>
								<a href={config.home_page.secondary_button.url}>
									{config.home_page.secondary_button.text}
								</a>
							</Button>
						)}
					</div>
				</div>
				<div className='col-start-3 h-[75%] w-full'>
					<Carousel
						className='h-full w-[85%] mx-auto lg:mx-0 lg:w-full'
						plugins={[
							Autoplay({
								delay: 4500,
								stopOnFocusIn: false,
								playOnInit: true,
								stopOnInteraction: false,
							}),
						]}
						opts={{
							loop: true,
						}}
					>
						<CarouselContent>
							<CarouselImageCard title='Latest News' />
							<CarouselImageCard
								title='Image 1'
								imageURL='/placeholder2.png'
							/>
							<CarouselImageCard
								title='Image 2'
								imageURL='/placeholder3.png'
							/>
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</div>
			</div>
		</main>
	);
}
