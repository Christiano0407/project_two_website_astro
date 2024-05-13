import type { Product, Category } from './structureData';


interface Props {
  product: Product;
  category: Category;
}


export const ProductDetail = ( { product , category }: Props ) => {
  return (
    <div className=''>
      <h2>{product.title}</h2>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <p>{category ? category.name : "Don't Exist Category..." } </p>
    </div>
  )
};
