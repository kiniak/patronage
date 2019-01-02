
// let superman = new Hero("Superman", "./images/superman.jpg", 3500);
// let hulk = new Hero("Halk", "./images/halk.jpg", 2500);
// let thor = new Hero("Thor", "./images/1575-thor.jpg", 55000);
// let ironMan= new Hero("IronMan", "./images/ironMan.jpg", 75000);
// let potter = new Hero("Potter", "./images/HARRY-POTTER.jpg", 125000);
// let batman = new Hero("Batman", "./images/batman.jpg", 35000);

let heroes = [
    {
        name: 'Superman',
        photo:  './images/superman.jpg',
        price: 3500,
        description: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna.'
    },
    {
        name: 'Hulk',
        photo: "./images/hulk.jpg",
        price: 2500,
        description: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna.'
    },
    {
        name: 'Thor',
        photo: "./images/1575-thor.jpg",
        price: 5500,
        description: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna.'
    },
    {
        name: 'IronMan',
        photo:  './images/ironMan.jpg',
        price: 7500,
        description: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna.'
    },
    {
        name: 'Potter',
        photo:  './images/HARRY-POTTER.jpg',
        price: 125000,
        description: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna.'
    },
    {
        name: 'Batman',
        photo:  './images/batman.jpg',
        price: 35000,
        description: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna.'
    },
];
let localHeroes = null;


if (localStorage.getItem('localHeroes')) {
    localHeroes = localStorage.getItem('localHeroes');
    if (localHeroes) {
        localHeroes = JSON.parse(localHeroes);
        heroes = [
            ...heroes,
            ...localHeroes.items
        ];
        
    } else {
        localHeroes = null;
    }
}