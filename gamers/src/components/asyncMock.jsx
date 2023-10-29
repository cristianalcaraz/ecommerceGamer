const products = [
    {
        id: '1',
        name: 'callofduty',
        price: 2000,
        category: 'celular',
        src: '/callofduty.jpg',
        alt: 'callofduty',
        stock: 6,
        descripcion: 'juego para play 4'
    },
    {
        id: '2',
        name: 'control',
        price: 1000,
        category: 'ps4',
        src: './img/control.jpg',
        alt: 'control'
    },
    {
        id: '3',
        name: 'gta five',
        price: 1500,
        category: 'ps4',
        src: './img/gta.jpg',
        alt: 'gta five'
    }
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
}
