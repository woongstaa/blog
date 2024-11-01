import { Header } from '@/widgets/Header';
import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'jay.log'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
