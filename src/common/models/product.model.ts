export type ProductModel = {
  id: string;
  name: string;
  code: string;
  description: string;
  categories: { name: string }[];
  createdAt: Date;
  updatedAt: Date;
};
