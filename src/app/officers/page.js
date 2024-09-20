import config from '@/lib/config';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Officers() {
	return (
		<main className='min-h-[90dvh] w-[85%] lg:w-[80%] mx-auto pt-[5dvh] flex items-center flex-col pb-16'>
			<h1 className='mx-auto font-bold text-5xl mb-10'>Officer Team</h1>
			<section className='flex flex-wrap gap-x-10 gap-y-6 w-[90%] justify-between mx-auto mb-16'>
				{config.officer_team.map((officer, index) => {
					return (
						<div
							key={index}
							className='text-center mx-auto lg:flex-[0_0_calc(33.33%-40px)]'
						>
							<Image
								src={officer.image}
								alt={officer.name}
								width={500}
								height={500}
								className='aspect-square object-cover rounded-md max-w-[75%] min-w-[75%] h-auto mx-auto'
							/>
							<h1 className='text-xl font-medium mt-2'>
								{officer.name}
							</h1>
							<p className='text-cyan-900 dark:text-cyan-100 text-base font-light'>
								{officer.role}
							</p>
						</div>
					);
				})}
			</section>
			{config.officer_app.display && (
				<section className='text-center flex flex-col items-center justify-center'>
					<h2 className='mx-auto font-bold text-3xl mb-5'>
						Officer Application
					</h2>
					{config.officer_app.open ? (
						<div className='flex flex-col md:max-w-[60%]'>
							<p className='text-cyan-900 dark:text-cyan-100 text-lg pb-4'>
								{config.officer_app.open_text}
							</p>
							<Button
								variant='default'
								size='xl'
								className='w-max mx-auto'
							>
								<a href={config.officer_app.link}>
									Apply Here!
								</a>
							</Button>
						</div>
					) : (
						<p className='text-lg font-medium text-cyan-900 dark:text-cyan-100 pb-10 md:w-[60%]'>
							{config.officer_app.closed_text}
						</p>
					)}
				</section>
			)}
		</main>
	);
}
