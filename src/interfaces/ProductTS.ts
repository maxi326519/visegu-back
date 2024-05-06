export interface ProductTS {
  id?: String;
  description: String;
  skuNumber: string;
  amount: number;
  priceBuy: number;
  priceSale: number;
  disabled: boolean;
  CategoryId?: string;
}