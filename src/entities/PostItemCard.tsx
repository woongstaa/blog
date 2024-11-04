import { PostListItem } from '@/shared';
import { NavigateToHref } from '@/features';

export function PostItemCard({ post }: { post: PostListItem }) {
  return (
    <NavigateToHref href={`/posts/${post.category}/${post.id}`}>
      <div className='rounded-lg border border-warm-gray p-4'>
        <h2 className='font-semibold text-xl truncate'>{post.title}</h2>
        <div className='h-2' />
        <p className='min-h-16 truncate break-words'>{post.description}</p>
        <div className='h-2' />
        <div className='flex justify-end text-cool-gray'>
          <img src={'/clock.svg'} className='w-4 object-contain aspect-square' />
          <div className='w-1' />
          <span>{post.readingTime}</span>
          <div className='w-2' />
          <span>{post.createdAt}</span>
        </div>
      </div>
    </NavigateToHref>
  );
}
