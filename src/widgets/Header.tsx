import { NavigateTo } from '@/features/navigateTo';

export function Header() {
  return (
    <header className='mx-auto flex max-w-prose justify-between py-2'>
      <NavigateTo href='/'>
        <p className='font-semibold'>Dev.woong 블로그</p>
      </NavigateTo>
      <div className='flex'>
        <p className='font-semibold'>블로그</p>
        <div className='w-4' />
        <NavigateTo href='/portfolio'>
          <p className='font-semibold'>포트폴리오</p>
        </NavigateTo>
      </div>
    </header>
  );
}
