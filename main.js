class pizza {  
    constructor(id, nombre, ingredientes, precio) {
        this.id = id;
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.precio = precio
    }

    mostrar = function() {
        console.log(`Pizza: ${this.nombre}`)
    }
}



const pizzas = [
    {
        id : 1,
        nombre : 'Especial',
        ingredientes:  ['tomate', 'muzzarella'] ,
        precio: 550
    },
    {
        id: 2,
        nombre: 'Napolitana',
        ingredientes:  ['muzzarella', 'jamon', 'morron'] ,
        precio: 1000,
    },
    {
        id: 3,
        nombre: 'Huevo frito',
        ingredientes:  ['huevo frito', 'muzzarella'] ,
        precio: 800,
    },
    {
        id: 4,
        nombre: 'Anana',
        ingredientes:  ['muzzarella', 'anana'] ,
        precio: 1200,
    },
    {
        id: 5,
        nombre: 'Carne',
        ingredientes: ['muzzarella', 'carne'],
        precio: 1250,
    },
    {
        id: 6,
        nombre: 'Anchoas ',
        ingredientes: ['muzzarella', 'anchoas'],
        precio: 1400
    },  
]

// a) Las pizzas que tengan un id impar.

const idImpar = pizzas.forEach((pizzas) => {
   
   if (pizzas.id % 2 !== 0) console.log(`la pizza ${pizzas["nombre"]} tiene un  id impar`)
})


// b) ¿Hay alguna pizza que valga menos de $600?

const menorQue600 = pizzas.some(pizzas => pizzas.precio < 600); {
    console.log (`¿Hay alguna pizza que valga menos de $600? ${menorQue600}`);
}
    
// c) El nombre de cada pizza con su respectivo precio.

const listPizzas = pizzas.map((pizzas) => {
    console.log(`La pizza ${pizzas.nombre} cuesta ${pizzas.precio}`)
})

// d) Todos los ingredientes de cada pizza

const ingredientes = pizzas.map((pizzas) => {
    console.log(`La pizza ${pizzas.nombre} tiene como ingredientes ${pizzas.ingredientes}`)
})


