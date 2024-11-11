import './globals.css';
import { Metadata } from 'next';
import { Header, Footer } from '@/widgets';

export const metadata: Metadata = {
  title: 'jay.log',
  verification: {
    google: 'Fovph-FksBSnhVVH01lO442APXMSp6jENyMGEPmPbYw'
  }
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
