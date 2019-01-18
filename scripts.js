(function () {

    class Basket {
        constructor(options){
            this.price = 0;
            this.items = [];
            this.itemsContainer = options.itemsContainer;
            this.priceContainer = options.priceContainer;
        }
        addItem(item) {
            if (this.items.find(i => i.name === item.name)) return false;
            let price = Number(item.price);
            if (Number.isNaN(price)) return false;
            this.price += price;
            if (!this.items.length) this.itemsContainer.innerHTML = '';
            this.items.push(item);
            this.itemsContainer.innerHTML += this.itemTemplate(item);
            this.priceContainer.innerHTML = this.price;
            return true;
        }
        removeItem (item) {
            let index = this.items.findIndex((hero) => hero.name === item.name);
            this.items.splice(index, 1);
            this.itemsContainer.innerHTML = !this.items.length 
                ? '<div class="basket__empty">Twój koszyk jest pusty</div>'
                : this.items.reduce((prev, curr) => `${prev} ${this.itemTemplate(curr)}`, '');
            this.price -= item.price;
            this.priceContainer.innerHTML = this.price;
        }
        itemTemplate (hero) {
            hero = {
                ...hero,
                description: hero.description.slice(0, 116)
            };
            return `
                <div class="basketHero col-4 col-1-s col-5-md">
                    <div class='basketHero__about row'>
                        <div class='basketHero__img'><img class='basketHero__jpg' src="${hero.image}"></div>
                        <div class='basketHero__text'>
                            <h2 class='basketHero__noun'>${hero.name}</h2>
                            <p class='basketHero__specification'>${hero.description}</p>
                            <button class='basketHero__remove' data-hero="${hero.name}"><span class='basketHero__remove-span'>usuń z koszyka</span><span class="basketHero__remove-i"><i class="fas fa-times"></i></span></button>
                        </div>
                     </div>
                        
                </div>
            `
        }
    };
    
    class Hero {
        constructor(hero){
            this.name = hero.name;
            this.image = hero.image; 
            this.price= hero.price;
            this.description = hero.description;  
        }
        getTemplate(){
            return `
            <img class="hero__picture" src="${this.image}" data-hero="${this.name}">
            <h2 class="hero__name">${this.name}</h2>
            <p class="hero__rent">cena wynajmu ${this.price} zł</p>
            `;
        }   
    }
    
    let getModalTemplate = (hero) => {
            return `
            <div class="description__hero">
                <div class='hero__close'><i class="fas fa-times"></i></div>
                    <div class='hero__about row'>
                        <div class='hero__img'><img class='hero__jpg' src="${hero.image}"></div>
                        <div class='hero__text'>
                            <h2 class='hero__noun'><span class='hero_noun-border'>I'</span>m the ${hero.name}!</h2>
                            <p class='hero__specification'>${hero.description}</p>
                            <div><h3 class='hero__price'>wynajem: ${hero.price} zł/h</h3></div>
                            <button class='hero__buy' data-hero="${hero.name}">dodaj do koszyka</button>
                        </div>
                    </div>
            </div>
        `
    }
    
    function init (heros) {
        let arrHeros = heros.map(hero => new Hero(hero));
    
    
            let herosContainer = document.querySelector(".heros");
            let modalContainer = document.querySelector('.heros__description');
            let contentButton = false;
            
            herosContainer.innerHTML = arrHeros.reduce((prev, curr) => `${prev}<div class='hero col-4 col-1-s col-5-md'>${curr.getTemplate()}</div>`, '');
            herosContainer.addEventListener('click', (e) => {
                let element = e.target;
                if (element && element.classList.contains('hero__picture')) {
                    fetch(`http://localhost:3000/heroes/${element.dataset.hero}`)
                        .then(response => response.json())
                        .then(response => {
                            modalContainer.innerHTML = getModalTemplate(response);
                            modalContainer.classList.add('heros__description__on');
                        })
                };
            });
    
            modalContainer.addEventListener('click', (e) => {
            let element = e.target;
        
            if (element && element.classList.contains('fa-times')) {
                modalContainer.classList.remove('heros__description__on');
    
            };
        });
    
    
            let priceTemplate = (hero) => {
                return `
                    ${hero.sumPrice}
                `
            }
    
    
        let itemsContainer = document.querySelector('.basket__content');
        let priceContainer = document.querySelector('.basket__amount-price');
        let HeroBasket = new Basket({
                itemsContainer,
                priceContainer
            });
            
            modalContainer.addEventListener('click', (e) => {
                let element = e.target;
                if (element && element.classList.contains('hero__buy')) {
                    let hero = arrHeros.find((hero) => hero.name === element.dataset.hero);
                    if (HeroBasket.addItem(hero)) {
                        modalContainer.classList.remove('heros__description__on');
                    } else {
                        element.textContent = 'Znajduje się już w koszyku!';
                    }          
                };
            });
            
            itemsContainer.addEventListener('click', (e) => {
                let element = e.target.closest('.basketHero__remove');
                if (element) {
                    let hero = arrHeros.find((hero) => hero.name === element.dataset.hero);
                    HeroBasket.removeItem(hero);
                }
            });
    };

    window.onload = () => {
        fetch('http://localhost:3000/heroes')
            .then(response => response.json())
            .then(response => init(response))
    }

    const menuHamburger = document.querySelector('.menuHamburger');
    const navSmallScreen__site = document.querySelector('.navSmallScreen__site');

    menuHamburger.addEventListener('click', function(){
        navSmallScreen__site.classList.toggle('navSmallScreen__site-toggle');
      });

}());