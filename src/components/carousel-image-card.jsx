import { Card, CardFooter } from '@/components/ui/card';
import { CarouselItem } from '@/components/ui/carousel';
import Image from 'next/image';

export function CarouselImageCard({ imageURL, title, description }) {
	return (
		<CarouselItem>
			<Card className='flex flex-col items-start justify-between gap-4 h-full rounded-md bg-white dark:bg-cyan-950'>
				<Image
					src={imageURL}
					alt='Product Image'
					width={800}
					height={500}
					className='w-full h-full object-cover rounded-t-md'
				/>
				<CardFooter className='grid gap-2 w-full bg-white dark:bg-cyan-950'>
					<h3 className='text-2xl font-bold'>{title}</h3>
					<p className='text-gray-500 dark:text-gray-400 text-md'>
						{description}
					</p>
				</CardFooter>
			</Card>
		</CarouselItem>
	);
}
