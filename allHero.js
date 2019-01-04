
let heros = [
    {
        name: 'Superman',
        description: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna.',
        image: './images/superman.jpg',
        price: 3500,
        isAvailable: true
    },
    {
        name: 'Hulk',
        description: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna.',
        image: "./images/hulk.jpg",
        price: 2500,
        isAvailable: true
    },
    {
        name: 'Thor',
        description: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna.',
        image: "./images/1575-thor.jpg",
        price: 5500,
        isAvailable: true
    },
    {
        name: 'IronMan',
        description: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna.',
        image: './images/ironMan.jpg',
        price: 7500,
        isAvailable: true
    },
    {
        name: 'Potter',
        description: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna.',
        image: './images/HARRY-POTTER.jpg',
        price: 125000,
        isAvailable: true
    },
    {
        name: 'Batman',
        description: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna.',
        image: './images/batman.jpg',
        price: 35000,
        isAvailable: true
    },
];

let localHeros = null;

if (localStorage.getItem('localHeros')) {

    localHeros = localStorage.getItem('localHeros');

    if (localHeros) {
        localHeros = JSON.parse(localHeros);
        heros = [
            ...heros,
            ...localHeros.items
        ];
    } else {
        localHeros = null;
    }
}