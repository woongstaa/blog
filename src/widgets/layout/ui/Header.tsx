import { NavigateToHref } from '@/features';

const NAV_LINKS = [
  { href: '/posts', label: 'posts.' },
  { href: '/portfolio', label: 'portfolio.' }
] as const;

export function Header() {
  return (
    <header className='mx-auto flex h-[6vh] max-w-[360px] items-center justify-between sm:max-w-prose'>
      <NavigateToHref href='/'>
        <h4 className='text-lg font-semibold'>jay.log</h4>
      </NavigateToHref>
      <nav className='flex gap-4'>
        {NAV_LINKS.map((link) => (
          <NavigateToHref key={link.href} href={link.href}>
            <h4 className='text-lg font-semibold'>{link.label}</h4>
          </NavigateToHref>
        ))}
      </nav>
    </header>
  );
}
