export interface CategoryModel {
  id: string;
  name: string;
}

export interface ProductModel {
  id: string;
  name: string;
  description: string;
  code: string;
  categories: CategoryModel[];
  createdAt: string;
  updatedAt: string;
}

export interface ICreateProductRequest {
  name: string;
  description: string;
  code: string;
  categories: string[];
}

export interface IUpdateProductRequest {
  name?: string;
  description?: string;
  code?: string;
  categories?: string[];
}
