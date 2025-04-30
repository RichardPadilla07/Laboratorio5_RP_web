// Richard Padilla
// Laboratorio 5 - Steam
// Aplicando temas: Arreglos, Promesas, Fetch, Manipulación del DOM (comentada)


// Metodo 1 - CallBack

function BusquedaSteam(titulo) {
    console.log(`!Se ha encontrado el titulo: ${titulo.toLocaleUpperCase()}¡`)
}

function registrarUsuario (CallBack){
    const titulo = "Tomb Raider"
    CallBack(titulo)
}

// CallBack - funcion que se pasa como argumento a otra funcion
registrarUsuario(BusquedaSteam) // aqui llamamos a la funcion 


// Productos
const games = [
    {Titulo: "Elden Ring", Genero: "RPG", Precio: 59.99},
    {Titulo: "Days Gone", Genero: "Terror", Precio: 39.99},
    {Titulo: "God Of War", Genero: "Accion", Precio: 49.99},
    {Titulo: "Final Fantasy XV", Genero: "Fantasia", Precio: 29.99},
]


// Metodo 2 - forEach: Mostar titulos
games.forEach((game) => {console.log(game.Titulo)});


// Metodo 3 - Map
const discountedGames = games.map((game) => {
    return { ...game, Descuento: game.Precio * 0.9 }
  })

console.log("Con descuento:", discountedGames)


// Metodo 4 - Filter: filtra los elementos de un arreglo y devuelve un nuevo arreglo con los elementos que cumplen la condicion
const expensiveGames = games.filter(game => game.Precio > 30)
console.log("Juegos caros:", expensiveGames)


// Metodo 5 - concat: concatena dos o mas arreglos y devuelve un nuevo arreglo

const TiendaOnline = ["Steam", "Epic Games", "PlayStation Store"]

const availability = [...games.map(game => game.Titulo), ...TiendaOnline];
console.log(availability);


// Metodo 6 - find: busca un elemento en un arreglo y devuelve el primer elemento que cumple la condicion
const findGame = games.find(game => game.Titulo === "God Of War");
console.log(findGame);

// Metodo 7 - push: agrega un elemento al final de un arreglo y devuelve la longitud del nuevo arreglo

let carrito = []
carrito.push(games[0]) // Elden Ring
carrito.push(games[1]) // Days Gone
console.log("Carrito:", carrito)

carrito.pop() // Elimina Elden Ring
console.log("Carrito actualizado:", carrito)

carrito.unshift(games[2]) // Agrega Hades al inicio
console.log("Carrito con Hades:", carrito)

carrito.shift() // Quita Hades
console.log("Carrito final:", carrito)



// Metodo 8 - slice: mostrar los dos primeros juegos
const topGames = games.slice(0, 2)
console.log("Top juegos:", topGames)



// Metodo 9 - Includes: verifica si un elemento existe en un arreglo y devuelve true o false
const gameNames = games.map(g => g.Titulo)
console.log(gameNames.includes("Portal 2") ? "Portal 2 está en la tienda" : "Portal 2 no disponible")



// Metodo 10 - Reduce: reduce un arreglo a un solo valor y devuelve el resultado
const totalPrice = games.reduce((sum, game) => sum + game.Precio, 0)
console.log(`Precio total sin descuento: $${totalPrice}`)