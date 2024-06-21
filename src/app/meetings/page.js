'use client';

import config from '@/lib/config.js';
import Image from 'next/image';

export default function Meetings() {
	return (
		<main className='min-h-[80dvh] grid flex-col gap-y-[10rem]'>
			<div className='h-full text-sm items-center justify-center w-[75%] lg:w-[70%] mx-auto pt-[5dvh] lg:pt-[5dvh]'>
				<div className='m-auto text-center justify-center flex-col'>
					<h1 className='font-bold text-5xl mb-5'>Meetings</h1>
					<h1 className='font-bold text-3xl mb-12'>When & Where?</h1>
				</div>
				<div className='lg:grid lg:grid-cols-[45%, 55%] gap-x-10'>
					<div className='flex flex-col'>
						<h2 className='font-bold text-3xl mb-5'>Info</h2>
						<p className='mb-10 text-lg'>{config.meetings.info}</p>
						<h2 className='font-bold text-3xl mb-5'>Activities</h2>
						<p className='mb-10 text-lg'>
							{config.meetings.activities}
						</p>
					</div>
					<div className='col-start-2'>
						<a href={config.meetings.image_link}>
							<Image
								src='/meetingimage.png'
								alt='Meeting Image'
								width={1000}
								height={1000}
								className='w-full rounded-md'
							/>
						</a>
					</div>
				</div>
			</div>
		</main>
	);
}
