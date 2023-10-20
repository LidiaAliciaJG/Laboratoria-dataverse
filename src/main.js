import {filterData,sortBy} from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

console.log(data);

const dataList = document.querySelector("ul");
const renderData = (dataset) => {
    dataList.innerHTML= "";
    dataset.forEach(element => {
        dataList.appendChild(renderItems(element));
    });
}

const main = () => {
    renderData(data);
}
main();

console.log(document.querySelector("ul"));

const getvalue= document.getElementById("type-select");
getvalue.addEventListener("change", function() {
  let filterBy="type";
  let value=getvalue.value;
  let renderFilter=filterData(data,filterBy,value);
  console.log("elección:"+filterBy,value,renderFilter);
  renderData(renderFilter);
});

const getfilter= document.getElementById("temporality-select");
getfilter.addEventListener("change", function() {
  let filterBy=getfilter.name;
  let value=getfilter.value;
  let renderFilter=filterData(data,filterBy,value);
  console.log("elección: filterby:"+filterBy,"value: "+value,"render:"+renderFilter);
  renderData(renderFilter);
});

// Selecciona el elemento select
const filterSelect = document.getElementById("sort-select");
filterSelect.addEventListener("change", function() { // Agrega un event listener para el cambio en el menú desplegable
  const sortOrder = filterSelect.value; // Obtiene el valor seleccionado del menú desplegable
  let sortedData = sortBy(data, sortOrder); // Llama a la función de ordenamiento
  renderData(sortedData);
});