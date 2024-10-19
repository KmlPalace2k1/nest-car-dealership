import { Car } from './../../cars/interfaces/car.interface';

export const CARS_SEED: Car[] = [
    {
        id: crypto.randomUUID(),
        brand: 'Toyota',
        model: 'Corolla',
    },
    {
        id: crypto.randomUUID(),
        brand: 'Honda',
        model: 'Civic',
    },
    {
        id: crypto.randomUUID(),
        brand: 'Jeep',
        model: 'Cherokee',
    },
]

