const API_URL = 'https://api.escuelajs.co/api/v1/products'; 


export const fullProducts = async (): Promise<any[]> => {
  try {
    const response = await fetch(API_URL); 

    if(!response.ok) {
      throw new Error('Failed to fetch products!!')
    }

    const data =  await response.json(); 

    return data; 

  }catch(error) {
    console.error(error); 
    return []; // Retornar un array vacío en caso de error
  }
}