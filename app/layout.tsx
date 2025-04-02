import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar/Navbar';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Coding with Zak',
  description: 'Welcome to Coding with Zak!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        <div className='container mx-auto'>{children}</div>
      </body>
    </html>
  );
}
