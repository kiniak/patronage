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
        <img class="hero__picture" src="${this.photo}">
        <h2 class="hreo__name">${this.name}</h2>
        <p class="hero__rent">cena wynajmu ${this.price} zł</p>
      </div>  
        `;
    }   
}



let arrHeroes = heroes.map(hero => new Hero(hero));

//dotad;

//pobrac dane z localstorage i dodac do arrHeroes

arrHeroes.forEach(function getHTML(hero){
    
    let heroesContainer = document.querySelector(".heroes");
    heroesContainer.innerHTML += `<div class='col-4'>${hero.getTemplate()}</div>`
    
}
);
