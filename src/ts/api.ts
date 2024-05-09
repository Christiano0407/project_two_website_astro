import type { Product, Category } from './structureData'; 


export const productsApi = async () => {
  try {

    const response = await fetch('https://api.escuelajs.co/api/v1/products'); 

    if(!response.ok) {
      throw new Error("Failed...To Fetch The API")
    }

    const data: Product[] = await response.json()
    console.log(data); 
    return data

  }catch(err) {
    console.error(err);
  }
}