import { NavigateTo } from '@/features/navigateTo';

export function Header() {
  return (
    <header className='max-w-[65ch] mx-auto py-2 flex justify-between'>
      <NavigateTo href='/'>
        <p className='font-semibold'>Dev.woong 블로그</p>
      </NavigateTo>
      <div className='flex'>
        <p className='font-semibold'>블로그</p>
        <div className='w-4' />
        <p className='font-semibold'>포트폴리오</p>
      </div>
    </header>
  );
}
