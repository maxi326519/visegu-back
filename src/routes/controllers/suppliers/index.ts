import { Suppliers } from "../../../db";

const createSupplier = async (supplier: string) => {
    if (!supplier) {
      throw new Error("The supplier name cannot be empty.");
    }
    const newSupplier = await Suppliers.create({ name: supplier });
    return newSupplier;
  };

const getAllSuppliers = async () => {
    const suppliers = await Suppliers.findAll();
    return suppliers;
  };

const updateSuppliers = async (suppliersId: string, updatedSuppliersName: string) => {
    const suppliers: any = await Suppliers.findOne({ where: { id: suppliersId } });
    if (!suppliers) {
      throw new Error("Suppliers not found");
    }
    suppliers.name = updatedSuppliersName;
    await suppliers.save();
    console.log(`Suppliers with ID ${suppliersId} successfully updated.`);
    return suppliers;
  };

const deleteSuppliers = async (suppliersId: string) => {
    const newSuppliers = await Suppliers.findOne({ where: { id: suppliersId } });
    if (!newSuppliers) {
      throw new Error("Suppliers not found");
    }
    await newSuppliers.destroy();
    console.log(`Suppliers with ID ${newSuppliers} successfully deleted.`);
  };

export {createSupplier, getAllSuppliers, updateSuppliers, deleteSuppliers}