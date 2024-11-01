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
            <NavigateToHref href='/posts'>
              <SingleCategory index={index} category={category} />
            </NavigateToHref>
          );
        } else {
          return (
            <NavigateToHref href={`/posts?filter=${category.name}`}>
              <SingleCategory index={index} category={category} />
            </NavigateToHref>
          );
        }
      })}
    </ul>
  );
}

function SingleCategory({ index, category }: { index: number; category: { name: string; fileCount: number } }) {
  return <li className='m-1 rounded bg-cool-gray-reverse p-2 text-warm-gray' key={`category_${index}`}>{`${category.name} (${category.fileCount})`}</li>;
}
