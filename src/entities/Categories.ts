import { utils, MARKDOWN_PATH } from '@/shared';

export interface Category {
  value: string;
  label: string;
  fileCount: number;
}

const korCategories: Record<string, string> = {
  retrospective: '회고',
  log: '기록',
};

function getAllCategoryNames(): string[] {
  return utils.getDirectory(utils.getFullPath(MARKDOWN_PATH));
}

function filterValidCategories(categoryNames: string[]): string[] {
  return categoryNames.filter((name) => {
    const categoryPath = utils.getFullPath(`${MARKDOWN_PATH}/${name}`);
    return utils.isDirectory(categoryPath);
  });
}

function addFileCount(categoryNames: string[]): Category[] {
  return categoryNames.map((name) => {
    const categoryPath = utils.getFullPath(`${MARKDOWN_PATH}/${name}`);
    return {
      value: name,
      label: korCategories[name],
      fileCount: utils.getDirectory(categoryPath).length,
    };
  });
}

export const categories = {
  getAll: (): Category[] => {
    const nonEmpty = categories.getNonEmpty();
    const totalFileCount = nonEmpty.reduce((sum, category) => sum + category.fileCount, 0);

    return [{ value: 'all', label: '전체', fileCount: totalFileCount }, ...nonEmpty];
  },

  getNonEmpty: (): Category[] => {
    const allNames = getAllCategoryNames();
    const validNames = filterValidCategories(allNames);
    return addFileCount(validNames).filter((category) => category.fileCount > 0);
  },

  getLabel: (name: string): string => {
    return korCategories[name];
  },
};
