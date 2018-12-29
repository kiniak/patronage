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

    
    let name = document.getElementsByName("name")[0].value;
    let photo = document.getElementsByName("picture")[0].value;
    let price = document.getElementsByName("price")[0].value;
    //zmienic name inputa z description na cos innego i ustawic na 0 index
    let description = document.getElementsByName("newDescription")[0].value;
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
    debugger;
  });

