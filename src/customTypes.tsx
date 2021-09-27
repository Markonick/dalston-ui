export interface IImage {
  id: number,
  url: string,
}

export interface ICategory {
  id: number,
  name: string,
  description: string,
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
  categories: Array<ICategory>,
  material: string,
  quantity: number,
  images: Array<IImage>,
};