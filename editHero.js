(function () {

let select;
let form;
let submit;

let clear_form = (form) => {
    form.image.value = '';
    form.price.value = '';
    form.newDescription.value = '';
}
let fill_form = (hero) => {
    form.image.value = hero.image;
    form.price.value = hero.price;
    form.newDescription.value = hero.description;
}
function init (response) {
    select = document.querySelector('#select_hero');
    form = document.querySelector('.form');
    submit = document.querySelector('.addHeros__button');

    select.innerHTML = response.reduce((prev, curr) => {
        prev = `${prev}
                    <option value="${curr.name}">
                        ${curr.name}
                    </option>`
            return prev;
    }, '<option value="">Wybierz bohatera</option>');

    select.addEventListener('change', (e) => {
        clear_form(form);
        if (!select.value) return;
        fetch(`http://localhost:3000/heroes/${select.value}`)
            .then(response => response.json())
            .then(response => {
                fill_form(response);
            })
    });

    submit.addEventListener('click', () => {
        let hero = {
            name: select.value,
            image: form.image.value,
            price: form.price.value,
            description: form.newDescription.value
        };
        fetch(`http://localhost:3000/heroes/${hero.name}`, {
            method: 'PUT', 
            body: JSON.stringify(hero),
            headers:{
                'Content-Type': 'application/json'
            }})
            .then(response => response.json())
            .then(response => {
                alert(`Udało się wyedytować bohatera ${response.name}`)
            })
            .catch(error => {
                console.log(error); 
                alert(`Nie mozna edytować bohatera ${hero.name}`)
            });
    });
}    


window.onload = () => {
    fetch('http://localhost:3000/heroes')
        .then(response => response.json())
        .then(response => init(response))
        .catch(error => console.error(error))
}
}());