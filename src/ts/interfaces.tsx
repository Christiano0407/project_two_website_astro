
import { useEffect, useState } from 'react';
import { ProductDetail } from './detailsProducts';
import { productsApi } from './api';
import type { Product, Category } from './structureData';


export const ProductList = () => {

  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setLoading] = useState(false);  // Rastrear el estado de carga. 
  const [error, setError] = useState<string | null >(null); // Almacenar mensajes de error. 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data: Product[] = await productsApi();
        if(data.length === 0) {
          throw new Error("Don't receive Products Data Available..."); 
        }
        setProducts(data);
       
      } catch (error) {
        console.error(error);  
        setError("We have a new Error to call API Products")
      } finally {
        setLoading(false); // Establecer el estado de carga en falso después de la recuperación o error
      }
    };  

    fetchProducts();
  }, []);

  return (
    <section>
      <h1 className='text-black text-base font-bold'>Products</h1>
      { isLoading ? (
        <p>Products...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : products.length === 0 ? (
        <p className='text-black text-base font-bold'>Don't Products</p>
      ) : (
        products.map((product) => (
          <ProductDetail key={product.id} product={product} category={product.category} />
        ))
      ) }
    </section>
  );
};