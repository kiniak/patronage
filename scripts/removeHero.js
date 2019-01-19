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
        select = document.querySelector('#removeHeros');
        submit = document.querySelector('.addHeros__button');
        console.log(select);
        select.innerHTML = response.reduce((prev, curr) => {
            prev = `${prev}
                        <option value="${curr.name}">
                            ${curr.name}
                        </option>`
                return prev;
        }, '<option value="">Wybierz bohatera</option>');
    
        submit.addEventListener('click', () => {

            fetch(`http://localhost:3000/heroes/${select.value}`, {
                method: 'DELETE',
                headers:{
                    'Content-Type': 'application/json'
                }})
                .then(response => response.json())
                .then(response => {
                    alert(`Udało się usunąć bohatera ${response.name}`)
                    select.options.remove(select.options.selectedIndex)
                })
                .catch(error => {
                    alert(`Nie mozna usunąć bohatera ${hero.name}`)
                });
        });
    }    
    
    
    window.onload = () => {
        fetch('http://localhost:3000/heroes')
            .then(response => response.json())
            .then(response => init(response))
            .catch(error => console.error(error))
    }

    const menuHamburger = document.querySelector('.menuHamburger');
    const navSmallScreen__site = document.querySelector('.navSmallScreen__site');

    menuHamburger.addEventListener('click', function(){
    navSmallScreen__site.classList.toggle('navSmallScreen__site-toggle');
  });
    }());