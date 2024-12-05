import { CategoriesImpl } from '@/entities';
import { NavigateToHref } from '@/features';

export function PostsCategoryNav() {
  const categories = new CategoriesImpl();

  return (
    <ul className='flex flex-wrap'>
      {categories.getAll().map((category, index) => {
        if (category.name === '전체') {
          return (
            <NavigateToHref key={`category_${index}`} href='/posts'>
              <SingleCategory category={category} />
            </NavigateToHref>
          );
        } else {
          return (
            <NavigateToHref key={`category_${index}`} href={`/posts?filter=${category.name}`}>
              <SingleCategory category={category} />
            </NavigateToHref>
          );
        }
      })}
    </ul>
  );
}

function SingleCategory({ category }: { category: { name: string; fileCount: number } }) {
  return <li className='m-1 rounded bg-cool-gray-reverse p-2 text-warm-gray'>{`${category.name} (${category.fileCount})`}</li>;
}
