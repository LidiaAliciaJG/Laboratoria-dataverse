// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

const btn= document.getElementById("Infantil");
btn.addEventListener("click", function() {
  let value="Infantil";
  console.log("si funciona");
  filterData(value);
});

export const filterData = (root, type, value) => {
  let peliculas = root;
  const pelisFiltradas = peliculas.filter(pelicula[type]===value);
  console.log(pelisFiltradas);
  return pelisFiltradas;
};

export const example = () => {
  return "hola, soy ejemplo";
};
