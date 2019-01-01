
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
        description: 'Id vis ignota ridens, eos at nibh vidisse tibique. Ludus propriae nam an, ei sit amet mazim invenire, eam illud munere at. Ut mel ferri dicam appetere. Ei laudem reprimique percipitur his, dicunt expetendis ut eum. No dicit deseruisse expetendis quo, natum reprimique sea ut.'
    },
    {
        name: 'Hulk',
        photo: "./images/hulk.jpg",
        price: 2500,
        description: 'Lorem ipsum dolor sit amet, ei adolescens inciderint mel, duo ut harum tation animal. Ex eam augue percipit inciderint. In per erat mediocrem, tamquam convenire id pro. An dolor mandamus vituperatoribus eos.'
    },
    {
        name: 'Thor',
        photo: "./images/1575-thor.jpg",
        price: 5500,
        description: 'Mei at nihil salutandi, ea has conceptam suscipiantur contentiones. Scripta debitis et nec, an aliquando accommodare usu. Ad porro etiam argumentum eum. Duo dolorem detracto ut. Eu fugit choro gubergren vel, vis ut regione insolens scriptorem, at his novum periculis laboramus.'
    },
    {
        name: 'IronMan',
        photo:  './images/ironMan.jpg',
        price: 7500,
        description: 'Mei at nihil salutandi, ea has conceptam suscipiantur contentiones. Scripta debitis et nec, an aliquando accommodare usu. Ad porro etiam argumentum eum. Duo dolorem detracto ut. Eu fugit choro gubergren vel, vis ut regione insolens scriptorem, at his novum periculis laboramus.'
    },
    {
        name: 'Potter',
        photo:  './images/HARRY-POTTER.jpg',
        price: 125000,
        description: 'Lorem ipsum dolor sit amet, ei adolescens inciderint mel, duo ut harum tation animal. Ex eam augue percipit inciderint. In per erat mediocrem, tamquam convenire id pro. An dolor mandamus vituperatoribus'
    },
    {
        name: 'Batman',
        photo:  './images/batman.jpg',
        price: 35000,
        description: 'Id vis ignota ridens, eos at nibh vidisse tibique. Ludus propriae nam an, ei sit amet mazim invenire, eam illud munere at. Ut mel ferri dicam appetere. Ei laudem reprimique percipitur his, dicunt expetendis ut eum. No dicit deseruisse expetendis quo, natum reprimique sea ut.'
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