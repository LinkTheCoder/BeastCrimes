
import './globals.css'
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import NavbarSmall from '../components/NavbarSmall';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'BEAST CRIMES',
  description: 'MYSTERY GAME',
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