// Asincronismo con Promise utilizando el SteamDB
const connectToSteamDB = (isConnected) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        isConnected ? resolve("Se ha conectado a SteamDB") : reject("Error de conexion a SteamDB")
      }, 3000)
    })
  }
  
  connectToSteamDB(false) // Aqui se cambia (true o false) para simular una conexion
    .then(msg => console.log(msg))
    .catch(err => console.log(err))


// Utilizando una API
const ObtenerJuegos = fetch("https://fakestoreapi.com/products")
ObtenerJuegos
    .then(respuesta => respuesta.json())
    .then(respuesta => console.log(respuesta)) 
    .catch(error => console.log(error)) 