export interface Hotel {
    id: number;
    name: string;
    image: string | undefined;
    description: string;
    price: number;
    location: string;
    rating: number;
    phone: string;
    website: string;
}