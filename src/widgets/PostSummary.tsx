import { Post } from '@/entities';

export function PostSummary({ category, data, readingTime }: Partial<Post>) {
  return (
    <div className='mx-auto mb-4 flex max-w-prose flex-col items-center justify-center'>
      {data?.thumbnail && (
        <>
          <img src={data.thumbnail} className='aspect-video rounded-lg bg-warm-gray object-contain' />
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
        <img src={'/clock.svg'} className='aspect-square w-4 object-contain' />
        <div className='w-1' />
        <p>{readingTime}</p>
      </div>
      <div className='h-2' />
      <p>{data?.createdAt}</p>
    </div>
  );
}
