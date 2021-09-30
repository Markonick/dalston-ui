export interface IImage {
  id: number,
  url: string,
}

export interface ICategory {
  id: number,
  name: string,
  description: string,
  products: IProduct[],
};

export interface IProduct {
  id: number,
  brand: string,
  name: string,
  price: number,
  description: string,
  size: number,
  condition: string,
  category: string,
  categories: ICategory[],
  material: string,
  quantity: number,
  images: IImage[],
};