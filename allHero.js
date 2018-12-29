
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
        price: 3500
    },
    {
        name: 'Hulk',
        photo: "./images/hulk.jpg",
        procce: 2500
    },
    {
        name: 'Thor',
        photo: "./images/1575-thor.jpg",
        procce: 5500
    },
    {
        name: 'IronMan',
        photo:  './images/ironMan.jpg',
        price: 7500
    },
    {
        name: 'Potter',
        photo:  './images/HARRY-POTTER.jpg',
        price: 125000
    },
    {
        name: 'Batman',
        photo:  './images/batman.jpg',
        price: 35000
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