import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ThemeToggle } from '@/components/layout/ThemeToggle';
import { Toaster } from '@/components/ui/sonner';
import LoadingAnimation from '@/components/common/LoadingAnimation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Akash Dhotre | PhD Candidate',
	description: 'Personal website of Akash Dhotre showcasing academic achievements, research projects, and professional aspirations.',
	keywords: 'Akash Dhotre, PhD, Researcher, Mechanical Engineering, Combustion, Portfolio',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
			<link rel="shortcut icon" href="/flask.png" type="image/x-icon" />
			</head>
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<LoadingAnimation />
					<Navbar />
					<main className="min-h-screen">
						{children}
					</main>
					<Footer />
					<ThemeToggle />
					<Toaster position="bottom-right" />
				</ThemeProvider>
			</body>
		</html>
	);
}