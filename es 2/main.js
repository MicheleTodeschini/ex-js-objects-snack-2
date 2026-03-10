console.log('funzia');
/* 
P.S.: Ricordati che gli Array, come gli oggetti, sono dei Reference Type (Tipi di Riferimento)!
Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? */

const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};

const secondBurger = { ...hamburger };
secondBurger.ingredients[0] = "Salad";

console.log(hamburger.ingredients[0]); // salad
console.log(secondBurger.ingredients[0]); // Salad

//Con la shallow copy (spread operator) il contenuto cambia perché le proprietà annidate vengono copiate come irferimetno, ma solo delle proprietà annidate!