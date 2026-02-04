export function Footer() {
  return (
    <div className=' mx-auto flex h-[6vh] max-w-[360px] justify-end border-t border-warm-gray pt-2 sm:max-w-prose'>
      <p>
        © jay.log powered by{' '}
        <a href='https://nextjs.org/' target='_blank' className='font-semibold text-warm-gray'>
          Next.js
        </a>
        ,{' '}
        <a href='https://vercel.com/' target='_blank' className='font-semibold text-warm-gray'>
          Vercel
        </a>
      </p>
    </div>
  );
}
