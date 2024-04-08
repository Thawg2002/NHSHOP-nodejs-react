export interface IProduct {
    _id?: number | string;
    name: string;
    image?: string;
    category?: string;
    price: number;
    gallery?:string[];
    quantity: number;
    description: string;
    discount: number;
    featured: boolean;
    countInStock: number;
}
