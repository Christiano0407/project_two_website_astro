/* import { describe, it, expect } from 'vitest';
import { build } from 'astro';

import { Cards } from '../components/ui/Cards.astro'; // Importa el componente Cards.astro

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

describe('Cards Component', () => {
  it('renders the products list correctly', async () => {
    // Mock Astro.props
    const props = { products: productsData };

    // Renderiza el componente Cards.astro
    const { content } = await build(<Cards {...props} />);

    // Verifica que el contenido renderizado contenga los elementos esperados
    expect(content).toContain('Product 1');
    expect(content).toContain('Product 2');
    expect(content).toContain('Description of Product 1');
    expect(content).toContain('Description of Product 2');
    expect(content).toContain('$ 100');
    expect(content).toContain('$ 200');
  });
});
 */