const API_CATEGORY = 'https://api.escuelajs.co/api/v1/categories'; 


const USERS_API = 'https://api.escuelajs.co/api/v1/users'; 


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


export const usersAPI = async (): Promise<any[]> => {
  try {
    const r = await fetch(USERS_API); 
    if(!r.ok) {
      throw new Error("Failed To Fetch Users"); 
    }
    return await r.json(); 

  }catch(err) {
    console.error("Error To call All Users...", err); 
    return []; 
  }
}