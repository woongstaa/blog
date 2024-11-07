import fs from 'fs';
import path from 'path';

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
  private readonly mdDirectory: string;

  constructor() {
    this.mdDirectory = utils.mdDirectory;
  }

  private getCategoryDirectories(): string[] {
    return fs.readdirSync(this.mdDirectory, 'utf-8');
  }

  private getCategoriesWithFileCount(): Category[] {
    const allCategories = this.getCategoryDirectories();

    return allCategories
      .filter((category) => {
        const categoryPath = path.join(this.mdDirectory, category);
        return fs.statSync(categoryPath).isDirectory();
      })
      .map((category) => {
        const categoryPath = path.join(this.mdDirectory, category);
        const fileCount = fs.readdirSync(categoryPath).length;

        return {
          name: category,
          fileCount: fileCount
        };
      });
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
