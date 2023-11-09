import { IProducts } from "@/interfaces/IProducts.types"

export const getProcuts = async (): Promise<IProducts> => {
    const response = await fetch("https://api.npoint.io/a09ac7b91bd15293ca54", {next: {revalidate: 3600}});
    if (response.status !== 200 ) {
        throw new Error('Failed to fetch data')
    }
    return response.json();

}
