import { Brand } from 'src/brands/entities/brand.entity';


export const BRANDS_SEED: Brand[] = [
    {
        id: crypto.randomUUID(),
        name: 'Volvo',
        createdAt: new Date().getTime(),
    },
    {
        id: crypto.randomUUID(),
        name: 'Toyota',
        createdAt: new Date().getTime(),
    },
    {
        id: crypto.randomUUID(),
        name: 'Honda',
        createdAt: new Date().getTime(),
    },
    {
        id: crypto.randomUUID(),
        name: 'Jeep',
        createdAt: new Date().getTime(),
    },
    {
        id: crypto.randomUUID(),
        name: 'Tesla',
        createdAt: new Date().getTime(),
    },
]

