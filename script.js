class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, resilience) {
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }
    increaseResilience(amount) {
        this.resilience += amount;
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
}

let redCard = new Unit("Red", 3, 3, 4);
let blackCard = new Unit("Black", 4, 5, 4);

let tarjetasClickeadas = [];

function target(tarjetaClickeada) {
    tarjetasClickeadas.push(tarjetaClickeada);

    if (tarjetasClickeadas.includes('redCard') && tarjetasClickeadas.includes('algoritmo-dificil-card')) {
        blackCard.increaseResilience(3);
        document.querySelector('#resistenciablack').innerHTML = blackCard.resilience + " Resistencia";

    } else if (tarjetasClickeadas.includes('redCard') && tarjetasClickeadas.includes('algoritmo-no-manejado')) {
        blackCard.increaseResilience(-2);
        document.querySelector('#resistenciablack').innerHTML = blackCard.resilience + " Resistencia";

    } else if (tarjetasClickeadas.includes('redCard') && tarjetasClickeadas.includes('programacion-en-pareja')) {
        blackCard.increaseResilience(2);
        document.querySelector('#resistenciablack').innerHTML = blackCard.resilience + " Resistencia";
    }

    if (tarjetasClickeadas.includes('blackCard') && tarjetasClickeadas.includes('algoritmo-dificil-card')) {
        blackCard.increaseResilience(3);
        document.querySelector('#resistenciared').innerHTML = blackCard.resilience + " Resistencia";

    } else if (tarjetasClickeadas.includes('blackCard') && tarjetasClickeadas.includes('algoritmo-no-manejado')) {
        blackCard.increaseResilience(-2);
        document.querySelector('#resistenciared').innerHTML = blackCard.resilience + " Resistencia";

    } else if (tarjetasClickeadas.includes('blackCard') && tarjetasClickeadas.includes('programacion-en-pareja')) {
        blackCard.increaseResilience(2);
        document.querySelector('#resistenciared').innerHTML = blackCard.resilience + " Resistencia";
    }
}
