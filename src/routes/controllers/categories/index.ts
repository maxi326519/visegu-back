import { Categories } from "../../../db";

const createCategory = async (category: string): Promise<any> => {
  if (!category) {
    throw new Error("The category name cannot be empty.");
  }
  const newCategory = await Categories.create({ name: category });
  return newCategory;
};

const getAllCategories = async () => {
    const categories = await Categories.findAll();
    return categories;
  };

const updateCategory = async (categoryId: string, updatedCategoryName: string) => {
    const category: any = await Categories.findOne({ where: { id: categoryId } });
    if (!category) {
      throw new Error("Category not found");
    }
    category.name = updatedCategoryName;
    await category.save();
    console.log(`Category with ID ${categoryId} successfully updated.`);
    return category;
  };

const deleteCategory = async (categoryId: string) => {
    const newCategory = await Categories.findOne({ where: { id: categoryId } });
    if (!newCategory) {
      throw new Error("Category not found");
    }
    await newCategory.destroy();
    console.log(`Category with ID ${newCategory} successfully deleted.`);
  };
  
  export {createCategory, getAllCategories, updateCategory, deleteCategory};
  
  
  
  
  
  