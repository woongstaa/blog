import { NavigateToHref } from '@/features';

export function Header() {
  return (
    <header className='mx-auto flex max-w-prose justify-between h-[6vh] items-center'>
      <NavigateToHref href='/'>
        <h4 className='font-semibold text-lg'>jay.log</h4>
      </NavigateToHref>
      <div className='flex'>
        <NavigateToHref href='/posts'>
          <h4 className='font-semibold text-lg'>posts.</h4>
        </NavigateToHref>
        <div className='w-4' />
        <NavigateToHref href='/portfolio'>
          <h4 className='font-semibold text-lg'>portfolio.</h4>
        </NavigateToHref>
      </div>
    </header>
  );
}
