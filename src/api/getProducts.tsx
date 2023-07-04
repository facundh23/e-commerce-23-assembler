
export const getProducts = async():Promise<[]> => {
  const response = await fetch(import.meta.env.VITE_API_URL);
  const data:[] = await response.json();
  return data
}

export const productsinStock = await getProducts();



