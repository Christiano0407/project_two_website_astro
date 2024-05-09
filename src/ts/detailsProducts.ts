import React from 'react';
import { Product, Category } from './structureData';

interface Props {
  product: Product;
  category: Category;
}

export const ProductDetail: React.FC<Props> = ({ product, category }) => {
  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <span>{product.price}</span>
      <span>{category.name}</span>
    </div>
  );
};
