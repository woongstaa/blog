import { NavigateToHref } from '@/features';

export function Header() {
  return (
    <header className='mx-auto flex max-w-prose justify-between py-4'>
      <NavigateToHref href='/'>
        <p className='font-semibold'>Dev.woong 블로그</p>
      </NavigateToHref>
      <div className='flex'>
        <NavigateToHref href='/posts'>
          <p className='font-semibold'>블로그</p>
        </NavigateToHref>
        <div className='w-4' />
        <NavigateToHref href='/portfolio'>
          <p className='font-semibold'>포트폴리오</p>
        </NavigateToHref>
      </div>
    </header>
  );
}
