//pobierac istniejacych bohaterow
//sprawdzic localstorage czy juz ktos cos dodal i pobrac to i dozucic do wszystkiego

let addName= document.getElementsByName("name").value;

let addPicture= document.getElementsByName("picture").value;

let buttonAddHero =  document.querySelector('.addHeroes__button');
let form =  document.querySelector('#hero_form');
console.log(buttonAddHero);

form.addEventListener("submit", function(e){
    

    e.preventDefault();

    
    //sprawdzić pola wymagane, walidacja
    //sprawdzic pobieranie wartosci inputow w submit
    //sprawdzic input type file
    //zmienic get element na query selector

    let form = document.querySelector('.form')
    let name = form.name.value;
    let photo = form.picture.value;
    let price = form.price.value;
    //zmienic name inputa z description na cos innego i ustawic na 0 index
    let description = form.newDescription.value;
    //walidacja
    

    //niepozwolic na dodanie istniejacego obiektu

    let hero = {
        name,
        photo,
        price,
        description
    };
    let newLocal = null;

    if (localHeroes) {
        localHeroes.items.push(hero)
    } else {
        newLocal = {
            items: [hero]
        }
    }

    //uniemozliwic dodawanie istniejacego bohatera
    
    localStorage.setItem('localHeroes', JSON.stringify(localHeroes || newLocal));
    
 
  });

