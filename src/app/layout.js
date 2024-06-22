import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import config from '@/lib/config';

export const metadata = {
	title: `${config.club_name} Website`,
	description: config.club_website_description,
	openGraph: {
		title: config.club_name,
		description: config.club_website_description,
		type: 'website',
		images: [
			{
				url: config.club_icon,
				alt: config.club_name,
			},
		],
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className='flex min-w-[100dvw] min-h-[100dvh] flex-col overflow-x-hidden scroll-smooth mx-auto justify-between'>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<Navbar />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
