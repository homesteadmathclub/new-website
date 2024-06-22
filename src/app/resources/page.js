'use client';

import config from '@/lib/config.js';

export default function Resources() {
	return (
		<main className='min-h-[90dvh] grid flex-col gap-y-[10rem] pt-[5dvh]'>
			<div className='h-full text-sm items-center justify-center w-[60%] lg:w-[55%] mx-auto'>
				<div className='m-auto text-center justify-center flex-col'>
					<h1 className='font-bold text-5xl mb-10'>Resources</h1>
					<div className='mx-auto w-max justify-center items-center flex flex-col md:flex-row mb-10 gap-3'>
						<h2 className='font-bold text-3xl'>Our email:</h2>
						<a
							className='text-2xl md:text-3xl md:font-bold font-semibold hover:underline text-blue-600 dark:text-blue-500 mx-auto'
							href={'mailto:' + config.club_email}
						>
							{config.club_email}
						</a>
					</div>
				</div>
				{config.resources_sections.map((obj, index) => (
					<div key={index}>
						<h2 className='font-bold text-3xl mb-5'>{obj.title}</h2>
						{obj.content.map((link, index) => (
							<li className='mb-4 text-lg' key={index + 'A'}>
								<a
									className='underline text-blue-600 dark:text-blue-500'
									target='_blank'
									href={link}
								>
									{link}
								</a>
							</li>
						))}
					</div>
				))}
			</div>
		</main>
	);
}
