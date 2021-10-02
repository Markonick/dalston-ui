import { useEffect, useState } from "react";
import axios from "axios";
import { IProduct, ICategory } from "../customTypes";


export const GetCategoryProducts = (category:string) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const baseUrl = process.env.REACT_APP_BASE_URL;
  console.log('IN PROD CATSSSSSS!!!!!', category)
  
  useEffect(() => {
    const fetchProducts = async () => {
      await axios.get<ICategory[]>(`${baseUrl}/categories?name=${category}`).then(response => {
        console.log(response)
        setProducts(response?.data[0].products);
      })
      .catch(function (err) {
        console.log(err)
      });;
    };
    fetchProducts();
  }, []);
  
  return (
    {products}
  );
}
    