const imagenes = document.querySelector(".img-galeria")
const imagenesLight = document.querySelector(".agregar-imagen")
const contenedorLight = document.querySelector(".imagen-light")


imagenes.forEach(imagen =>{
   imagen.addEventListener("clkick", ()=>{
       aparecerImagen(imagen.getAttribute("src"))
   })
})


const aparecerImagen =(imagen)=>{
imagenesLight.srs = imagen;
contenedorLight.classList.toggle("show")
imagenesLight.classList.toggle("showImage")
}