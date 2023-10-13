// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones. FILTRO ORDENAMIENTO 
import data from './data/dataset.js';

export const filterData = (data, value) => {
  function filtrado(data) {
    return data.type == value;
  };
    return data.filter(filtrado); //filter() requiere una funcion que returne true para revisar el array bajo esa condicion
};

export const example = () => {
  return "hola, soy ejemplo";
};
