import { NavigateToHref } from '@/features';

export function Header() {
  return (
    <header className='mx-auto  flex h-[6vh] max-w-[360px] items-center justify-between sm:max-w-prose'>
      <NavigateToHref href='/'>
        <h4 className='text-lg font-semibold'>jay.log</h4>
      </NavigateToHref>
      <div className='flex'>
        <NavigateToHref href='/posts'>
          <h4 className='text-lg font-semibold'>posts.</h4>
        </NavigateToHref>
      </div>
    </header>
  );
}
