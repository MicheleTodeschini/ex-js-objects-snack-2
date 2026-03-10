console.log('funzia');


/* Qual è il metodo migliore per clonare l’oggetto chef, e perché?
Qual è il metodo migliore per clonare l’oggetto restaurant, e perché? */

const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
}

const restaurant = {
    name: "Hyur's Burgers",
    address: {
        street: 'Main Street',
        number: 123,
    },
    openingDate: new Date(2025, 3, 11),
    isOpen: false,
};

/* const restaurant2 = structuredClone(restaurant)

console.log(restaurant.openingDate);

console.log(restaurant2.openingDate); */

const chef2 = { ...chef }

chef.makeBurger()
chef2.makeBurger()



//Il metodo migliore per clonare l'oggetto restaurant è lo structuredClone in quanto mi permette di copiare anche la parte Date()
//facendo const chef2 = structuredClone(chef) da errore perché lo structuredClone non copia le funzioni, stessa cosa per lo JSON.parse(JSON.stringify(chef)). Non è neanche consigliabile la reference perché in quesro caso non sarebbe un nuovo chef, ma una copia di chef. Quindi la soluzione migliore è quella di usare lo spread operator