import { filterData, sortData } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

console.log(data);

const dataList = document.querySelector("#root");
//const renderData = (dataset) => {
  dataList.appendChild(renderItems(data));
  //dataset.forEach(element => {
    //dataList.appendChild(renderItems(element));
  //});


const dataNum = document.querySelector("p");
const renderNum = (num) => {
  dataNum.innerHTML = "Número de películas: " + num;
};

const main = () => {
   renderNum(data.length);
};
main();

const original = [...data];

console.log(document.querySelector("ul"));

const filterType = document.getElementById("type-select");
filterType.addEventListener("change", function () {
  dataList.innerHTML=""
  const filterBy = filterType.name;
  filterState.filterByType = filterBy;
  const value = filterType.value;
  filterState.filterByTypeValue = value;
  const renderFilter = filterData(data, filterBy, value);
  if (filterState.filterByDate === "") {
    dataList.appendChild(renderItems(renderFilter)); 
    renderNum(renderFilter.length);
  } else {
    const filterBy = filterState.filterByDate;
    const value = filterState.filterByDateValue;
    const renderFilter2 = filterData(renderFilter, filterBy, value);
    renderItems(renderFilter2);
    renderNum(renderFilter2.length);
  }
});

const filterDate = document.getElementById("temporality-select");
filterDate.addEventListener("change", function () {
  dataList.innerHTML=""
  const filterBy = filterDate.name;
  filterState.filterByDate = filterBy;
  const value = filterDate.value;
  filterState.filterByDateValue = value;
  const renderFilter = filterData(data, filterBy, value);
  if (filterState.filterByType === "") {
    renderItems(renderFilter);
    renderNum(renderFilter.length);
  } else {
    const filterBy = filterState.filterByType;
    const value = filterState.filterByTypeValue;
    const renderFilter2 = filterData(renderFilter, filterBy, value);
    renderItems(renderFilter2);
    renderNum(renderFilter2.length);
  }
});

// Selecciona el elemento select
const sortName = document.getElementById("sort-select");
sortName.addEventListener("change", function () {
  dataList.innerHTML=""
  const sortOrder = sortName.value;
  filterState.sortOrder = sortOrder;
  const sortBy = sortName.name;
  const sortedData = sortData(data, sortBy, sortOrder);
  if (filterState.filterByType === "" && filterState.filterByDate === "") {
    renderItems(sortedData);
  } else {
    const filterByType = filterState.filterByType;
    const valueType = filterState.filterByTypeValue;
    const renderFilterType = filterData(data, filterByType, valueType);
    const filterByDate = filterState.filterByDate;
    const valueDate = filterState.filterByDateValue;
    const renderFilterLast = filterData(renderFilterType, filterByDate, valueDate);
    renderItems(renderFilterLast);
  }
});

const btnClear = document.getElementById("button-clear");
btnClear.addEventListener("click", function () {
  resetFilters();
  console.log(filterState);
  renderItems(original);
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
  filterState.filterByType = "";
  filterState.filterByDate = "";
  filterState.sortOrder = "none";
  filterType.value = "";
  filterDate.value = "";
  sortName.value = "none";
};
