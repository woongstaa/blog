import { utils } from '@/shared';

export interface Category {
  name: string;
  fileCount: number;
}

export interface Categories {
  getAll: () => Category[];
  getCategoriesWithFileCountOver0: () => Category[];
}

export class CategoriesImpl implements Categories {
  private getCategoryDirectories(): string[] {
    const fullPath = utils.getFullPath(['src', 'shared', 'markdown']);

    return utils.getDirectory(fullPath);
  }

  private addFileCount(categories: string[]) {
    return categories.map((category) => {
      const categoryPath = utils.getFullPath(['src', 'shared', 'markdown', category]);
      const fileCount = utils.getDirectory(categoryPath).length;

      return {
        name: category,
        fileCount: fileCount
      };
    });
  }

  private isDirectoryFilter(categories: string[]) {
    return categories.filter((category) => {
      const categoryPath = utils.getFullPath(['src', 'shared', 'markdown', category]);

      return utils.isDirectory(categoryPath);
    });
  }

  private getCategoriesWithFileCount(): Category[] {
    const allCategories = this.getCategoryDirectories();
    const existCategories = this.isDirectoryFilter(allCategories);

    return this.addFileCount(existCategories);
  }

  public getCategoriesWithFileCountOver0(): Category[] {
    return this.getCategoriesWithFileCount().filter((category) => category.fileCount > 0);
  }

  public getAll(): Category[] {
    const categoriesWithFileCountOver0 = this.getCategoriesWithFileCountOver0();
    const totalCategoriesFileCount = categoriesWithFileCountOver0.reduce((sum, category) => sum + category.fileCount, 0);

    return [{ name: '전체', fileCount: totalCategoriesFileCount }, ...categoriesWithFileCountOver0];
  }
}
