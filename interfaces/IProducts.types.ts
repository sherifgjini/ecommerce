export interface IProduct {
    id: number;
    title: string;
    price: number;
    stock: number;
    description?: string;
    href: string;
    imgUrl: string;
}

export interface IProducts {
    data: IProduct[];
    statusCode: number;
}