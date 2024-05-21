import { render, screen } from '@testing-library/react';
import { z } from 'zod';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import Cards from '../../../src/components/ui/Cards.astro';


/* Cards.test.tsx: Usa React Testing Library para renderizar el componente y Jest para las aserciones. */


// === Prove props Data ===
const productsData = [
  {
    id: 1,
    title: 'Product 1',
    price: 100,
    description: 'Description of Product 1',
    images: ['https://via.placeholder.com/150']
  },
  {
    id: 2,
    title: 'Product 2',
    price: 200,
    description: 'Description of Product 2',
    images: ['https://via.placeholder.com/150']
  }
];

// === Jest test ===
test('Render The products List Correctly', () => {
 render(<Cards products={productsData} />); 

 // Check If Products Titles are Rendered
 expect(screen.getByAltText('Product 1')).toBeInTheDocument();  
 expect(screen.getByAltText('Product 2')).toBeInTheDocument();  

})