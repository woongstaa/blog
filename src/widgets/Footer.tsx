export function Footer() {
  return (
    <div className='max-w-prose mx-auto flex justify-end border-t border-warm-gray py-4'>
      <p>
        © jay.log powered by{' '}
        <a href='https://nextjs.org/' target='_blank' className='text-warm-gray font-semibold'>
          Next.js
        </a>
        ,{' '}
        <a href='https://vercel.com/' target='_blank' className='text-warm-gray font-semibold'>
          Vercel
        </a>
      </p>
    </div>
  );
}
