import { utils } from '@/shared';
import { NavigateToHref } from './NavigateToHref';

export function PostsCategoryNav() {
  const categories = utils.getAllPostCategories().filter((category) => category.fileCount > 0);

  const totalFileCount = categories.reduce((sum, category) => sum + category.fileCount, 0);

  const includeAllCategory = [{ name: '전체', fileCount: totalFileCount }, ...categories];

  return (
    <ul className='flex flex-wrap'>
      {includeAllCategory.map((category, index) => {
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
