import { Post } from '@/entities/post';
import { NavigateToHref } from '@/features';
import { utils } from '@/shared';

export function PostItems({ posts }: { posts: Post[] }) {
  return posts.map((post, index) => {
    return (
      <div key={`post_${index}`}>
        <PostItemCard post={post} />
        {posts.length - 1 !== index && <div className='h-4' />}
      </div>
    );
  });
}

function PostItemCard({ post }: { post: Post }) {
  return (
    <NavigateToHref href={`/posts/${post.category}/${post.id}`}>
      <div className='rounded-lg border border-warm-gray p-4'>
        <h2 className='truncate text-xl font-semibold'>{post.data.title}</h2>
        <div className='h-2' />
        <p className='min-h-16 truncate text-pretty break-words'>{post.data.description}</p>
        <div className='h-2' />
        <div className='flex justify-end text-cool-gray'>
          <img src={'/clock.svg'} alt='' className='aspect-square w-4 object-contain' />
          <div className='w-1' />
          <span>{post.readingTime}</span>
          <div className='w-2' />
          <span>{utils.dateFormatter(post.data.createdAt, 'YYYY. MM. DD')}</span>
        </div>
      </div>
    </NavigateToHref>
  );
}
