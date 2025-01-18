export interface Destination {
    id: number;
    name: string;
    image: string | undefined;
    location: string;
    description: string;
    rating: number;
    price: number;
    duration: number;
    distance: number;
}