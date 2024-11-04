import { FrontMatter, Post } from '@/shared/types';

export function PostSummary({ category, data, readingTime }: Partial<Post>) {
  return (
    <div className='mx-auto my-8 flex max-w-prose flex-col items-center justify-center'>
      {data?.thumbnail && (
        <>
          <img src={data.thumbnail} className='aspect-video object-contain bg-warm-gray rounded-lg' />
          <div className='h-8' />
        </>
      )}
      <p className='rounded-lg bg-cool-gray px-2 py-1 font-bold text-[#333]'>{category}</p>
      <div className='h-2' />
      <p className='text-[2.5em] font-bold text-warm-gray'>{data?.title}</p>
      <div className='h-2' />
      <p>{data?.description}</p>
      <div className='h-2' />
      <div className='flex items-center'>
        <img src={'/clock.svg'} className='w-4 object-contain aspect-square' />
        <div className='w-1' />
        <p>{readingTime}</p>
      </div>
      <div className='h-2' />
      <p>{data?.createdAt}</p>
    </div>
  );
}
