// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones. FILTRO ORDENAMIENTO 
import data from './data/dataset.js';

export const filterData = (data, filterBy, value) => {
  function filtrado(data) {
    return data[filterBy] == value || data.facts[filterBy] == value;
  };
  return data.filter(filtrado); //filter() requiere una funcion que returne true para revisar el array bajo esa condicion
};

export const example = () => {
  return "hola, soy ejemplo";
};

export const sortBy = (data, sortOrder) => {
  if (sortOrder === "asc") {
    // Ordena de la A a la Z basándose en el nombre de la película
    return data.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOrder === "desc") {
    // Ordena de la Z a la A basándose en el nombre de la película
    return data.sort((a, b) => b.name.localeCompare(a.name));
  } else {
    return data; // No se especificó un orden, devuelve los datos sin cambios
  }
}



