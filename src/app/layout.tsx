import './globals.css';
import { Metadata } from 'next';
import { Header, Footer } from '@/widgets';

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
        <Footer />
      </body>
    </html>
  );
}
