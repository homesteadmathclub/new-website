'use client';

import config from '@/lib/config.js';

export default function Resources() {
	return (
		<main className='min-h-[90dvh] w-[85%] lg:w-[50%] mx-auto pt-[5dvh] lg:pt-[5dvh] flex flex-col pb-16'>
			<div className='text-center items-center justify-center flex-col mb-10'>
				<h1 className='font-bold text-5xl mb-5'>Resources</h1>
				<h2 className='font-bold text-3xl'>Our email:</h2>
				<a
					className='text-2xl md:text-3xl md:font-bold font-semibold hover:underline text-blue-600 dark:text-blue-500 mx-auto'
					href={'mailto:' + config.club_email}
				>
					{config.club_email}
				</a>
			</div>
			{config.resources_sections.map((obj, index) => 
				<div key={index}>
					<h2 className='font-bold text-3xl mb-5'>{obj.title}</h2>
					{obj.content.map((link, index2) => 
						<li className='mb-4 text-lg' key={index2 + 'a'}>
							<a className='hover:underline text-blue-600 dark:text-blue-500' target='_blank' href={link}>
								{link}
							</a>
						</li>
					)}
				</div>
			)}
		</main>
	);
}