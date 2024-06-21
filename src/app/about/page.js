'use client';

import config from '@/lib/config.js';

export default function About() {
	return (
		<main className='min-h-[90dvh] grid flex-col gap-y-[10rem]'>
			<div className='h-full text-sm items-center justify-center w-[70%] lg:w-[65%] mx-auto pt-[5dvh] lg:pt-[5dvh]'>
				<div className='m-auto text-center justify-center flex-col'>
					<h1 className='font-bold text-5xl mb-5'>About Us</h1>
					<h2 className='font-bold text-3xl mb-10'>
						Hey! Welcome to {config.club_name}!
					</h2>
				</div>
				{config.about_sections.map((obj) => (
					<>
						<h3 className='font-bold text-3xl mb-5'>{obj.title}</h3>
						<p className='mb-10 text-lg'>{obj.content}</p>
					</>
				))}
			</div>
		</main>
	);
}
