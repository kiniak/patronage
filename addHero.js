//pobierac istniejacych bohaterow
//sprawdzic localstorage czy juz ktos cos dodal i pobrac to i dozucic do wszystkiego

let addName= document.getElementsByName('name').value;

let addPicture= document.getElementsByName('picture').value;

let buttonAddHero =  document.querySelector('.addHeroes__button');
let form =  document.querySelector('#hero__form');


form.addEventListener('submit', function(e){
    

    e.preventDefault();

    let form = document.querySelector('.form')
    let name = form.name.value;
    let image = form.picture.value;
    let price = form.price.value;
   
    let description = form.newDescription.value;

    let hero = {
        name,
        image,
        price,
        description,
        isAvailable
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

