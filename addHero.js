let addName = document.getElementsByName("name").value;

let addPicture = document.getElementsByName("image").value;

let buttonAddHero = document.querySelector('.addHeros__button');
let form = document.querySelector('#hero_form');

form.addEventListener("submit", function (e) {


    e.preventDefault();


    let form = document.querySelector('.form')
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
    let newLocal = null;

    if (localHeros) {
        localHeros.items.push(hero)
    } else {
        newLocal = {
            items: [hero]
        }
    }

    localStorage.setItem('localHeros', JSON.stringify(localHeros || newLocal));

    form.name.value = '';
    form.image.value = '';
    form.price.value = '';
    form.newDescription.value = '';

});

