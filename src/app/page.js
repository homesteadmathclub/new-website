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
import Image from 'next/image';

export default function Home() {
	return (
		<main className='min-h-[90dvh]'>
			{/* <Image
				src='/placeholder3.png'
				alt='drone shot of hhs'
				width={800}
				height={300}
				className='w-full absolute -z-10 brightness-[.2] h-[50%] object-cover hero-image'
			/> */}
			<div className='h-full text-sm lg:grid lg:grid-cols-[55%,10%,35%] items-center justify-center w-[85%] lg:w-[80%] mx-auto pt-[5dvh] lg:pt-[7.5dvh]'>
				<div className='flex flex-col gap-y-6 pt-10'>
					<div className='flex items-end text-7xl font-bold'>
						{config.club_name}
					</div>
					<div className='text-xl '>
						{config.home_page.description}
					</div>
					<div className='flex gap-y-4 gap-x-8 flex-col sm:flex-row mx-auto lg:mx-0 w-full max-w-[87.5%]'>
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
				<div className='col-start-3 h-[75%] w-full mt-8 lg:mt-0'>
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
