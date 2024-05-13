
import { useEffect, useState } from 'react';
import { ProductDetail } from './detailsProducts';
import { productsApi } from './api';
import type { Product, Category } from './structureData';


export const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data: Product[] = await productsApi();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };  

    fetchProducts();
  }, []);

  return (
    <section>
      <h1>Products</h1>
      {products.length === 0 ? (
        <p className='text-black text-base font-bold' >Don't products available</p>
      ) : (
        products.map((product) => (
          <ProductDetail key={product.id} product={product} category={product.category} />
        ))
      )}
    </section>
  );
};