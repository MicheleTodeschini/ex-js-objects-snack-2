console.log('funzia');

/* Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? */

const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    maker: {
        name: "Anonymous Chef",
        restaurant: {
            name: "Hyur's Burgers",
            address: "Main Street, 123",
            isOpen: true,
        },
        age: 29
    }
};

const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger);

// viene creata una copia con anche gli oggetti complessi con secondBurger e una copia con oggetti complessi con ThirdBurger