// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.
import data from './data/dataset.js';

const btn= document.getElementById("Infantil");
btn.addEventListener("click", function() {
  let value="Infantil";
  filterData(value);
  console.log("si funciona", pelisFiltradas);
});

export const filterData = (data, type, value) => {
  let peliculas =data;
  const pelisFiltradas = peliculas.filter(peliculas[type]===value);
  console.log(pelisFiltradas);
  return pelisFiltradas;
};

export const example = () => {
  return "hola, soy ejemplo";
};
