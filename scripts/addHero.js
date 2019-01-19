let addName = document.getElementsByName("name").value;

let addPicture = document.getElementsByName("image").value;



let buttonAddHero = document.querySelector('.addHeros__button');
const form = document.querySelector('#hero_form');
let clear_form = (form) => {
    form.name.value = '';
    form.image.value = '';
    form.price.value = '';
    form.newDescription.value = '';
}


form.addEventListener("submit", function (e) {


    e.preventDefault();


    const form = document.querySelector('.form')
    let name = form.name.value;
    let image = form.image.value;
    let price = form.price.value;

    let description = form.newDescription.value;


    let hero = {
        name,
        image,
        price,
        description
    };

    fetch('http://localhost:3000/heroes', {
        method: 'POST', 
        body: JSON.stringify(hero),
        headers:{
            'Content-Type': 'application/json'
        }})
        .then(response => response.json())
        .then(response => {
            alert(`Udało się zapisać bohatera ${response.name}`)
            clear_form(form)
        })
        .catch(error => {
            console.log(error); 
            alert(`Nie mozna zapisac bohatera ${hero.name}`)
        })

});

const menuHamburger = document.querySelector('.menuHamburger');
const navSmallScreen__site = document.querySelector('.navSmallScreen__site');

menuHamburger.addEventListener('click', function(){
    navSmallScreen__site.classList.toggle('navSmallScreen__site-toggle');
  });
