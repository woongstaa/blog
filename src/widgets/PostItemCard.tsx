import { Posts } from '@/entities/Posts';
import { NavigateToHref } from '@/features';

export function PostItemCard({ post }: { post: Posts }) {
  return (
    <NavigateToHref href={`/posts/${post.category}/${post.id}`}>
      <div className='rounded-lg border border-warm-gray p-4'>
        <h2 className='truncate text-xl font-semibold'>{post.title}</h2>
        <div className='h-2' />
        <p className='min-h-16 truncate text-pretty break-words'>{post.description}</p>
        <div className='h-2' />
        <div className='flex justify-end text-cool-gray'>
          <img src={'/clock.svg'} alt='' className='aspect-square w-4 object-contain' />
          <div className='w-1' />
          <span>{post.readingTime}</span>
          <div className='w-2' />
          <span>{post.createdAt}</span>
        </div>
      </div>
    </NavigateToHref>
  );
}
