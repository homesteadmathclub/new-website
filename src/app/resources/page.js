'use client';

import config from '@/lib/config.js';

export default function Resources() {
	return (
		<main className='min-h-[90dvh] grid flex-col gap-y-[10rem] mt-10'>
			<div className='h-full text-sm items-center justify-center w-[60%] lg:w-[55%] mx-auto pt-[5dvh] lg:pt-[5dvh]'>
				<div className='m-auto text-center justify-center flex-col'>
					<h1 className='font-bold text-5xl mb-5'>Resources</h1>
					<h1 className='font-bold text-3xl mb-10'>
						Our email:{' '}
						<a
							className='hover:underline text-blue-600 dark:text-blue-500'
							href={'mailto:' + config.club_email}
						>
							{config.club_contact_email}
						</a>
					</h1>
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
