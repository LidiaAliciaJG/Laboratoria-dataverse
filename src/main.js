import {filterData,sortData} from './dataFunctions.js';
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

const dataNum = document.querySelector("p");
const renderNum = (num) => {
  dataNum.innerHTML="Número de películas: "+num;
}

const main = () => {
    renderData(data);
    renderNum(data.length);
}
main();

const original=[...data];

console.log(document.querySelector("ul"));

const filterType= document.getElementById("type-select");
filterType.addEventListener("change", function() {
  let filterBy=filterType.name;
  filterState.filterByType=filterBy;
  let value=filterType.value;
  filterState.filterByTypeValue=value;
  let renderFilter=filterData(data,filterBy,value);
  if (filterState.filterByDate=="") {
    renderData(renderFilter);
    renderNum(renderFilter.length)
  } else {
    let filterBy=filterState.filterByDate;
    let value=filterState.filterByDateValue;
    let renderFilter2=filterData(renderFilter,filterBy,value);
    renderData(renderFilter2);
    renderNum(renderFilter2.length)
  }
});

const filterDate= document.getElementById("temporality-select");
filterDate.addEventListener("change", function() {
  let filterBy=filterDate.name;
  filterState.filterByDate=filterBy;
  let value=filterDate.value;
  filterState.filterByDateValue=value;
  let renderFilter=filterData(data,filterBy,value);
  if (filterState.filterByType=="") {
    renderData(renderFilter);
    renderNum(renderFilter.length)
  } else {
    let filterBy=filterState.filterByType;
    let value=filterState.filterByTypeValue;
    let renderFilter2=filterData(renderFilter,filterBy,value);
    renderData(renderFilter2);
    renderNum(renderFilter2.length)
  }
});

// Selecciona el elemento select
const sortName = document.getElementById("sort-select");
sortName.addEventListener("change", function() { // Agrega un event listener para el cambio en el menú desplegable
  const sortOrder = sortName.value; // Obtiene el valor seleccionado del menú desplegable
  filterState.sortOrder=sortOrder;
  let sortBy = sortName.name;
  let sortedData = sortData(data,sortBy,sortOrder); // Llama a la función de ordenamiento
  if (filterState.filterByType=="" && filterState.filterByDate=="") {
    renderData(sortedData);
  } else {
    let filterByType=filterState.filterByType;
    let valueType=filterState.filterByTypeValue;
    let renderFilterType=filterData(data,filterByType,valueType);
    let filterByDate=filterState.filterByDate;
    let valueDate=filterState.filterByDateValue;
    let renderFilterLast=filterData(renderFilterType,filterByDate,valueDate);
    renderData(renderFilterLast);
  }
});

const btnClear = document.getElementById("button-clear");
btnClear.addEventListener("click", function () {
  resetFilters();
  console.log(filterState);
  renderData(original);
  renderNum(data.length);
});

const filterState = {
  filterByType: "",
  filterByTypeValue: "",
  filterByDate: "",
  filterByDateValue: "",
  sortOrder: "",
};

const resetFilters = () => {
  filterState.filterByType="";
  filterState.filterByDate="";
  filterState.sortOrder="none";
  filterType.value = "";
  filterDate.value = "";
  sortName.value = "none";
};