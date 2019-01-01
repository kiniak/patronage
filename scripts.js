//Wyniesc do innego pliku od tad do ...


class Hero {
    constructor(hero){
        this.name = hero.name;
        //dodac placeholder
        this.photo = hero.photo || 'PLACEHOLDER'; 
        this.price= hero.price;
        this.description = hero.description;  
    }
    getTemplate(){

        return `
        <div class="hero">
        <img class="hero__picture" src="${this.photo}" data-hero="${this.name}">
        <h2 class="hero__name">${this.name}</h2>
        <p class="hero__rent">cena wynajmu ${this.price} zł</p>
      </div>  
        `;
    }   
}

let getModalTemplate = (hero) => {
    return `
    <div class="description_hero">
    
            <div class='hero_close'><i class="fas fa-times"></i></div>
                <div class='hero_about'>
                    <div class='hero_img'><img class='hero_jpg' src="${hero.photo}"></div>
                    <div class='hero_text'>
                        <h2 class='hero_noun'><span class='hero_noun-border'>I'</span>m the ${hero.name}!</h2>
                        <p class='hero_specification'>${hero.description}</p>
                        <h3 class='hero_price'>wynajem: ${hero.price} zł/h</h3>
                        <button class='hero_buy'>dodaj do koszyka</button>
                    </div>
                </div>
            
    </div>
    `
}


let arrHeroes = heroes.map(hero => new Hero(hero));

//dotad;

//pobrac dane z localstorage i dodac do arrHeroes

// arrHeroes.forEach(function getHTML(hero){
    
//     let heroesContainer = document.querySelector(".heroes");
//     heroesContainer.innerHTML += `<div class='col-4'>${hero.getTemplate()}</div>`
    
// }
// );
    let heroesContainer = document.querySelector(".heroes"),
        modalContainer = document.querySelector('.heros_description');
       
    heroesContainer.innerHTML = arrHeroes.reduce((prev, curr) => `${prev}<div class='col-4'>${curr.getTemplate()}</div>`, '');
    heroesContainer.addEventListener('click', (e) => {
        let element = e.target;
        if (element && element.classList.contains('hero__picture')) {
            let hero = arrHeroes.find((hero) => hero.name === element.dataset.hero);
            let photo = arrHeroes.find((hero) => hero.photo === element.dataset.hero);
            let price = arrHeroes.find((hero) => hero.price === element.dataset.hero);
            let description = arrHeroes.find((hero) => hero.description === element.dataset.hero);
            modalContainer.innerHTML = getModalTemplate(hero);
            modalContainer.classList.add('heros_description_on');
           
            
        };
    });

//close hero


    modalContainer.addEventListener('click', (e) => {
    let element = e.target;
    console.log(e.target);
    if (element && element.classList.contains('fa-times')) {
        modalContainer.classList.remove('heros_description_on');
        
    };
});
