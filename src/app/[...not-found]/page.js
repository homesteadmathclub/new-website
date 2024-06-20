import Link from 'next/link';
import { Button } from "@/components/ui/button"

export default function Err404() {
	return (
		<main className="min-h-[90dvh] w-[85%] lg:w-[80%] mx-auto lg:pt-[10dvh]">
			<div className="flex h-[60vh] flex-col items-center justify-center py-2">
				<main className="flex h-full flex-col items-center justify-center gap-y-8 px-20 text-center">
					<h1 className="flex flex-col gap-y-3 text-5xl font-bold">
						<span>
							404
						</span>
						Page not found
					</h1>
					<Button 
						asChild
						size="xl2"
					>
						<Link href="/">
							Back to Home
						</Link>
					</Button>
				</main>
			</div>
		</main>
	);
}
