// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones. FILTRO ORDENAMIENTO 
import data from './data/dataset.js';

export const filterData = (data, filterBy, value) => {
  function filtrado(data) {
    return data[filterBy] == value || data.facts[filterBy] == value;
  };
    return data.filter(filtrado); //filter() requiere una funcion que returne true para revisar el array bajo esa condicion
};

export const example = () => {
 
};
