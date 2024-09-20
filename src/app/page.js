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
import { CarouselImageCard } from '@/components/carousel-image-card';

export default function Home() {
	return (
		<main className='flex flex-col gap-y-12 h-full mt-[2.5dvh] lg:-mt-[10dvh]'>
			<div className='lg:mt-[10rem] text-sm lg:grid lg:grid-cols-[55%,10%,35%] items-center justify-center w-[82.5%] lg:w-[80%] mx-auto'>
				<div className='flex flex-col gap-y-6 pt-10 mx-auto'>
					<div className='flex items-end text-5xl md:text-6xl lg:text-7xl font-bold'>
						{config.club_name}
					</div>
					<div className='text-xl '>
						{config.home_page.description}
					</div>
					<div className='flex gap-y-4 gap-x-8 flex-col sm:flex-row mx-auto lg:mx-0 w-full '>
						<Button asChild variant='default' size='xl'>
							<a href={config.signup_form}>Sign up now!</a>
						</Button>
						{config.home_page.secondary_button.display && (
							<Button asChild variant='outline' size='xl'>
								<a href={config.home_page.secondary_button.url}>
									{config.home_page.secondary_button.text}
								</a>
							</Button>
						)}
					</div>
				</div>
				<div className='col-start-3 h-[75%] w-full mt-8 mb-8 lg:mt-0'>
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
							{config.home_page.carousel.map(
								(carousel, index) => (
									<CarouselImageCard
										key={index}
										title={carousel.name}
										description={carousel.description}
										imageURL={carousel.image}
									/>
								)
							)}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</div>
			</div>
			{config.display_about && (
				<>
					<a name='about'></a>
					<div className='text-sm items-center justify-center w-[70%] lg:w-[65%] mx-auto pt-[5dvh] mb-12'>
						<div className='m-auto text-center justify-center flex-col'>
							<h1 className='font-bold text-5xl mb-5'>
								About Us
							</h1>
							<h2 className='font-bold text-3xl mb-10'>
								Hey! Welcome to {config.club_name}!
							</h2>
						</div>
						{config.about_sections.map((obj, index) => (
							<div key={index}>
								<h3 className='font-bold text-3xl mb-5'>
									{obj.title}
								</h3>
								<p className='mb-10 text-lg'>{obj.content}</p>
							</div>
						))}
					</div>
				</>
			)}
		</main>
	);
}
