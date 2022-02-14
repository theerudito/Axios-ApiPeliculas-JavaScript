// API PELICULAS CON AXIOS
let pagina = 1;
const botonAnterior = document.getElementById("btnAnterior")
const botonSiguiente = document.getElementById("btnSiguiente")

botonSiguiente.addEventListener("click", () =>{

if (pagina < 1000) {
	pagina += 1
	obtenerDatos()
	}

})
botonAnterior.addEventListener("click", () =>{
	if (pagina > 1) {
		pagina -= 1
		obtenerDatos()
		}
	})
const obtenerDatos = async () => {
  try {
    const res = await axios.get("https://api.themoviedb.org/3/movie/popular", {
      params: {
        // Llave Api
        api_key: '5f65d66bcffc737ecb2ec91faa9ae44f',
        // Lenguaje entro otros
        language: "ex-MX",
        // Headers
        headers:'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjY1ZDY2YmNmZmM3MzdlY2IyZWM5MWZhYTlhZTQ0ZiIsInN1YiI6IjYxZWRlZDVmM2ZhYmEwMDA0NTQ2MzE5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Weua7v7Z8heTkrrro532vVmcug84vcZUW4_rDXaWUxs'  
      },   
    })    
    console.log(res);
    const data = await res.data.results
    // comrpobar si la respuesta es correcta
	if (res.status === 200) { 
      console.log(data);
    let peliculas = ""
    data.forEach(pelicula => {
      peliculas += `
 
            <div class="pelicula">
              <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
              <h3 class="titulo">${pelicula.title}</h3>
            </div> `
    })
    const contenedor = document.getElementById("contenedor").innerHTML = peliculas
   } else if (respuesta === 401) {
     console.log("Pusistes Mal La Llave");
   } else if (respuesta === 404) {
     console.log("La Pelicula que busca no existe");
   } else {
     console.log("Hubo un error en la busqueda");
   }
 
    
    
  } catch (error) {
    console.log(error);
  }
} 


obtenerDatos()



	