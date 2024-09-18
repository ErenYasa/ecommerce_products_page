export interface IProduct {
    name: string;
    brand: string;
    color: string;
    price: string;
    registeredAt: Date;
    quantity: number;
}

export type Products = IProduct[];
