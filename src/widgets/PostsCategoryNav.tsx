import { CategoriesImpl } from '@/entities';
import { NavigateToHref } from '@/features';

export function PostsCategoryNav() {
  const categories = new CategoriesImpl();

  return (
    <ul className='flex flex-wrap'>
      {categories.getAll().map((category, index) => {
        if (category.label === '전체') {
          return (
            <NavigateToHref key={`category_${index}`} href='/posts'>
              <SingleCategory category={category} />
            </NavigateToHref>
          );
        } else {
          return (
            <NavigateToHref key={`category_${index}`} href={`/posts?filter=${category.value}`}>
              <SingleCategory category={category} />
            </NavigateToHref>
          );
        }
      })}
    </ul>
  );
}

function SingleCategory({ category }: { category: { value: string; fileCount: number; label: string } }) {
  return <li className='m-1 rounded bg-cool-gray-reverse p-2 text-warm-gray'>{`${category.label} (${category.fileCount})`}</li>;
}
