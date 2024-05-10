import type { Product, Category } from './structureData'; 


interface ApiResponse {
  products: Product[]; 
  categories: Category[]; 
}


export const productsApi = async (): Promise<Product[]> => {

  try {

    const response = await fetch('https://api.escuelajs.co/api/v1/products'); 

    if(!response.ok) {
      throw new Error("Failed...To Fetch The API")
    }

    const { products, categories } : ApiResponse = await response.json(); 

    const productWithCategory = products.map((product) => ({
      ...product,
      category: categories.find((category) => category.id === product.category?.id)
    }))

    const plusProduct = productWithCategory.length > 0 ? productWithCategory : null;
    // - La razón por la que se usa plusProduct o null en este caso específico es para asegurarse de que la función siempre devuelva un array de productos (Product[]). -
    
    return  plusProduct as Product[]; 
    /* const data: Product[] = await response.json()
    console.log(data); 
    return data */

  }catch(err) {
    console.error(err);
    throw err; 
  }
  
}