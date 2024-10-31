import { FrontMatter } from '@/shared/types';

export function PostSummary({ category, data }: { category: string; data: FrontMatter }) {
  return (
    <div className='mx-auto my-8 flex max-w-prose flex-col items-center justify-center'>
      <p className='rounded-lg bg-cool-gray px-2 py-1 font-bold text-[#333]'>{category}</p>
      <div className='h-2' />
      <p className='text-[2.5em] font-bold text-warm-gray'>{data.title}</p>
      <div className='h-2' />
      <p>{data.createdAt}</p>
      <div className='h-2' />
      <p>{data.description}</p>
    </div>
  );
}
