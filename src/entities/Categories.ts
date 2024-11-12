import { utils, MARKDOWN_PATH } from '@/shared';

export interface Category {
  name: string;
  fileCount: number;
}

export interface Categories {
  getAll: () => Category[];
  getNonEmptyCategories: () => Category[];
}

export class CategoriesImpl implements Categories {
  private getAllCategories(): string[] {
    return utils.getDirectory(utils.getFullPath(MARKDOWN_PATH));
  }

  private addFileCount(categories: string[]): Category[] {
    return categories.map((category) => {
      const categoryPath = utils.getFullPath(`${MARKDOWN_PATH}/${category}`);
      return {
        name: category,
        fileCount: utils.getDirectory(categoryPath).length
      };
    });
  }

  private filterValidCategories(categories: string[]): string[] {
    return categories.filter((category) => {
      const categoryPath = utils.getFullPath(`${MARKDOWN_PATH}/${category}`);
      return utils.isDirectory(categoryPath);
    });
  }

  public getNonEmptyCategories(): Category[] {
    const allCategories = this.getAllCategories();
    const validCategories = this.filterValidCategories(allCategories);
    return this.addFileCount(validCategories).filter((category) => category.fileCount > 0);
  }

  public getAll(): Category[] {
    const categoriesWithFileCount = this.getNonEmptyCategories();
    const totalFileCount = categoriesWithFileCount.reduce((sum, category) => sum + category.fileCount, 0);

    return [{ name: '전체', fileCount: totalFileCount }, ...categoriesWithFileCount];
  }
}
