export const initCart = () => {
    const productsInLocalStorageCart = localStorage.getItem('cart') as string ;
    if(productsInLocalStorageCart){
        try {
            return JSON.parse(productsInLocalStorageCart);
        } catch (error) {
            throw new Error( 'Error al cargar la pagina')
        }
    }
    return []
} 

export const getProductsFromLocalStorageWish = ():any => {
    const productsInLocalStorageWish= localStorage.getItem('wish');
    if(productsInLocalStorageWish){
        try {
            return JSON.parse(productsInLocalStorageWish);
        } catch (error) {
            throw new Error( 'Error al cargar la pagina')
        }
    }
    return []
} 

