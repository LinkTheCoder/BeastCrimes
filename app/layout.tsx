
import './globals.css'
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import NavbarSmall from '../components/NavbarSmall';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'BEAST CRIMES',
  description: 'Crimes across the times. Are you able to solve them all?',
  metadataBase: new URL('https://www.beastcrimes.com/'),
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
        {children}
        <NavbarSmall />
      </body>
    </html>
  );
}