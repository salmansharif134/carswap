export interface CarData {
    id: string;
    imageSrc: string;
    price: string;
    year: number;
    type: string;
    makeModel: string;
    status: string;
    fuel: string;
    mileage: string;
    capacity: string;
    transmission: string;
    condition: string;
    power: string;
    priceBg?: 'green' | 'brown';
}

export const detailedCars: CarData[] = [
    {
        id: '1',
        imageSrc: '/1.jpg',
        price: '4 444 Ft',
        year: 1953,
        type: 'EGYTERŰ',
        makeModel: 'ALPINA B5...',
        status: 'ELADÓ / CSERÉLHETŐ',
        fuel: 'DÍZEL / GÁZ',
        mileage: '444 km',
        capacity: '444 cm3',
        transmission: 'AUTOMATA (9 FOKOZATÚ)',
        condition: 'HIÁNYOS',
        power: '444 kW',
        priceBg: 'green'
    },
    {
        id: '2',
        imageSrc: '/2.jpg',
        price: '77 777 Ft',
        year: 1951,
        type: 'EGYTERŰ',
        makeModel: 'AIWAYS U5...',
        status: 'CSERÉLHETŐ',
        fuel: 'BENZIN / GÁZ (LPG)',
        mileage: '3 333 km',
        capacity: '44 444 cm3',
        transmission: 'AUTOMATA (8 FOKOZATÚ)',
        condition: 'HIÁNYOS',
        power: '555 555 kW', // Adjusted to match screenshot roughly
        priceBg: 'green'
    },
    {
        id: '3',
        imageSrc: '/3.jpg',
        price: '1 800 000 Ft',
        year: 2016,
        type: 'EGYÉB',
        makeModel: 'TOYOTA AYGO...',
        status: 'ELADÓ / CSERÉLHETŐ',
        fuel: 'BENZIN',
        mileage: '67 000 km',
        capacity: '970 cm3',
        transmission: 'AUTOMATA',
        condition: 'NORMÁL',
        power: '50 kW',
        priceBg: 'green' // Example variation
    },
    {
        id: '4',
        imageSrc: '/4.jpg',
        price: '4 444 Ft',
        year: 1952,
        type: 'EGYÉB',
        makeModel: 'ACURA RL...',
        status: 'CSERÉLHETŐ',
        fuel: 'BENZIN / GÁZ (LPG)',
        mileage: '11 111 km',
        capacity: '1 111 cm3',
        transmission: 'AUTOMATA (9 FOKOZATÚ)',
        condition: 'ÚJSZERŰ',
        power: '1 111 kW',
        priceBg: 'green'
    },
    {
        id: '5',
        imageSrc: '/5.jpg',
        price: '4 444 Ft',
        year: 1951,
        type: 'EGYÉB',
        makeModel: 'AIWAYS U6...',
        status: 'ELADÓ / CSERÉLHETŐ',
        fuel: 'BENZIN / GÁZ (LPG)',
        mileage: '1 111 km',
        capacity: '1 111 cm3',
        transmission: 'AUTOMATA (8 FOKOZATÚ)',
        condition: 'ÚJSZERŰ',
        power: '11 111 kW',
        priceBg: 'green'
    },
    {
        id: '6',
        imageSrc: '/1.jpg',
        price: '33 333 Ft',
        year: 1953,
        type: 'EGYTERŰ',
        makeModel: 'AIXAM CROSSOVER...',
        status: 'ELADÓ / CSERÉLHETŐ',
        fuel: 'DÍZEL',
        mileage: '1 111 km',
        capacity: '111 cm3',
        transmission: 'AUTOMATA (9 FOKOZATÚ)',
        condition: 'HIÁNYOS',
        power: '1 111 kW',
        priceBg: 'green'
    },
    {
        id: '7',
        imageSrc: '/2.jpg',
        price: '55 555 Ft',
        year: 1951,
        type: 'FERDEHÁTÚ',
        makeModel: 'ALFA-ROMEO 159...',
        status: 'ELADÓ / CSERÉLHETŐ',
        fuel: 'DÍZEL',
        mileage: '3 333 km',
        capacity: '3 333 cm3',
        transmission: 'AUTOMATA (9 FOKOZATÚ)',
        condition: 'HIBÁS',
        power: '3 333 kW',
        priceBg: 'green'
    },
    {
        id: '8',
        imageSrc: '/3.jpg',
        price: '3 333 Ft',
        year: 1951,
        type: 'EGYTERŰ',
        makeModel: 'AIXAM CITY...',
        status: 'ELADÓ',
        fuel: 'BENZIN / GÁZ (CNG)',
        mileage: '2 222 km',
        capacity: '222 cm3',
        transmission: 'AUTOMATA (9 FOKOZATÚ)',
        condition: 'HIBÁS',
        power: '222 kW',
        priceBg: 'green'
    },
    {
        id: '9',
        imageSrc: '/4.jpg',
        price: '77 674 Ft',
        year: 1955,
        type: 'EGYÉB',
        makeModel: 'AIWAYS 5...',
        status: 'CSERÉLHETŐ',
        fuel: 'BENZIN / GÁZ',
        mileage: '7 777 km',
        capacity: '77 777 cm3',
        transmission: 'AUTOMATA (9 FOKOZATÚ)',
        condition: 'HIBÁS',
        power: '7 777 kW',
        priceBg: 'green'
    }
];
