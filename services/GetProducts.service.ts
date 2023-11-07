import {  IProducts } from "@/interfaces/IProducts.types"

export const getProcuts = async (): Promise<IProducts> => {
    const response = await fetch("https://api.npoint.io/395be385795b6dc5391d");
    if (response.status !== 200 ) {
        throw new Error('Failed to fetch data')
    }
    return response.json();

}