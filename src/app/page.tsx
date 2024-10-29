import { utils } from '@/shared/utils';
import Link from 'next/link';

export default async function Page() {
  // const categories = await utils.getAllPostCategories();
  const asdf = await utils.getAllPosts();

  return (
    <div>
      {asdf.map((post, index) => {
        return (
          <Link key={`post_${index}`} href={`/posts/${post.category}/${post.id}`}>
            <p>{post.title}</p>
            <p>{post.description}</p>
            {/* <p>{Date(post.createdAt)}</p> */}
          </Link>
        );
      })}
    </div>
  );
}
