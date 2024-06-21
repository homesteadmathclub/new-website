import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata = {
	title: 'HHS Club Website',
	description: 'Template website for various clubs at Homestead High School',
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
