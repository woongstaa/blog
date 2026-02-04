import { PageLayout } from '@/shared';
import { PostItems } from './PostItems';
import { PostsCategoryNav } from './PostsCategoryNav';
import { Post, PaginationInfo } from '@/entities/post';
import { Pagination, SearchInput } from '@/features';

interface PostListProps {
  posts: Post[];
  pagination: PaginationInfo;
  category?: string;
  query?: string;
}

export function PostList({ posts, pagination, category, query }: PostListProps) {
  const params = new URLSearchParams();
  if (category) params.set('category', category);
  if (query) params.set('q', query);
  const queryString = params.toString();
  const baseUrl = queryString ? `/posts?${queryString}` : '/posts';

  return (
    <PageLayout>
      <div className="mb-4">
        <SearchInput category={category} />
      </div>
      <PostsCategoryNav />
      <br />
      <PostItems posts={posts} />
      <Pagination
        currentPage={pagination.currentPage}
        totalPages={pagination.totalPages}
        baseUrl={baseUrl}
      />
    </PageLayout>
  );
}
