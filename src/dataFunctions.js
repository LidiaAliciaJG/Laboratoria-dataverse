// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones. FILTRO ORDENAMIENTO 
import dataset from './data/dataset.js';

export const filterData = (data, filterBy, value) => {
  function filtrado(data) {
    if (filterBy === "temporality") {
      if (value === "actual") {
        return data.facts["temporality"] >= 2010 && data.facts["temporality"] <= 2023;
      } else if (value === "anterior") {
        return data.facts["temporality"] < 2010 && data.facts["temporality"] >= 1940;
      } else {
        return dataset;
      }
    }
    if (value === "") {
      return dataset;
    } else {
      return data[filterBy] === value || data.facts[filterBy] === value;
    }
  }
  return data.filter(filtrado); //filter() requiere una funcion que returne true para revisar el array bajo esa condicion
};

const unSort = Array.from(dataset);
export const sortData = (data, sortBy, sortOrder) => {
  if (sortBy === "name") {
    if (sortOrder === "asc") {
      // Ordena de la A a la Z basándose en el nombre de la película
      return data.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === "desc") {
      // Ordena de la Z a la A basándose en el nombre de la película
      return data.sort((a, b) => b.name.localeCompare(a.name));
    } else {
      return unSort; // No se especificó un orden, devuelve los datos sin cambios
    }
  }
};

export const computeStats = (data) => {
  //Cantidad de películas
  const numMovies = data.reduce(count => count += 1, 0);
  //Promedio de aprobación de la crítica
  const dataCritic = data.map(element => parseInt(element.facts.criticRating));
  const sumCritic = (dataCritic.reduce((sum, element) => sum + element, 0));
  const promCritic = sumCritic / numMovies
  const criticMovies = Math.round(promCritic * 10) / 10;
  return { numMovies, criticMovies };
};