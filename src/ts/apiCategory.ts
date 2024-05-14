const API_CATEGORY = 'https://api.escuelajs.co/api/v1/categories'; 


export const allCategory = async (): Promise<any[]> => {
  try {
    const response = await fetch(API_CATEGORY);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};
