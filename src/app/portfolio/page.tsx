import { Portfolio } from '@/_pages';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'portfolio, jay.log',

  openGraph: {
    title: 'portfolio, jay.log'
  }
};

export default function Page() {
  return <Portfolio />;
}
