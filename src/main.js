import { computeStats, filterData, sortData } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';


const dataList = document.querySelector("#root");
//const renderData = (dataset) => {
dataList.appendChild(renderItems(data));
//dataset.forEach(element => {
//dataList.appendChild(renderItems(element));
//});


const dataNum = document.querySelector("p");
const renderStats = (data) => {
  dataNum.innerHTML = "Número de películas: " + computeStats(data).numMovies + "<br>Promedio de aprobación: " + computeStats(data).criticMovies + "%";
};

//const main = () => {
renderStats(data);
//renderData(data);
//};
//main();

const original = Array.from(data);


const filterType = document.querySelector("#type-select");
filterType.addEventListener("change", function () {
  dataList.innerHTML = "";
  const filterBy = filterType.name;
  filterState.filterByType = filterBy;
  const value = filterType.value;
  filterState.filterByTypeValue = value;
  const renderFilter = filterData(data, filterBy, value);
  if (filterState.filterByDate === "") {
    dataList.appendChild(renderItems(renderFilter));
    renderStats(renderFilter);
  } else {
    const filterBy = filterState.filterByDate;
    const value = filterState.filterByDateValue;
    const renderFilter2 = filterData(renderFilter, filterBy, value);
    //renderData(renderFilter2);
    dataList.appendChild(renderItems(renderFilter2));
    renderStats(renderFilter2);
  }
});

const filterDate = document.querySelector("#temporality-select");
filterDate.addEventListener("change", function () {
  //dataList.innerHTML=""
  const filterBy = filterDate.name;
  filterState.filterByDate = filterBy;
  const value = filterDate.value;
  filterState.filterByDateValue = value;
  const renderFilter = filterData(data, filterBy, value);
  if (filterState.filterByType === "") {
    dataList.innerHTML = "";
    //renderData(renderFilter);
    dataList.appendChild(renderItems(renderFilter));
    renderStats(renderFilter);
  } else {
    dataList.innerHTML = "";
    const filterBy = filterState.filterByType;
    const value = filterState.filterByTypeValue;
    const renderFilter2 = filterData(renderFilter, filterBy, value);
    //renderData(renderFilter2);
    dataList.appendChild(renderItems(renderFilter2));
    renderStats(renderFilter2);
  }
});

// Selecciona el elemento select
const sortName = document.querySelector("#sort-select");
sortName.addEventListener("change", function () {
  //dataList.innerHTML=""
  const sortOrder = sortName.value;
  filterState.sortOrder = sortOrder;
  const sortBy = sortName.name;
  const sortedData = sortData(data, sortBy, sortOrder);
  if (filterState.filterByType === "" && filterState.filterByDate === "") {
    dataList.innerHTML = "";
    dataList.appendChild(renderItems(sortedData));
  } else if (filterState.filterByType === "") {
    dataList.innerHTML = "";
    const filterByDate = filterState.filterByDate;
    const valueDate = filterState.filterByDateValue;
    const renderFilterLast = filterData(data, filterByDate, valueDate);
    dataList.appendChild(renderItems(renderFilterLast));
  } else if (filterState.filterByDate === "") {
    dataList.innerHTML = "";
    const filterByType = filterState.filterByType;
    const valueType = filterState.filterByTypeValue;
    const renderFilterLast = filterData(data, filterByType, valueType);
    dataList.appendChild(renderItems(renderFilterLast));
  } else {
    dataList.innerHTML = "";
    const filterByType = filterState.filterByType;
    const valueType = filterState.filterByTypeValue;
    const renderFilterType = filterData(data, filterByType, valueType);
    const filterByDate = filterState.filterByDate;
    const valueDate = filterState.filterByDateValue;
    const renderFilterLast = filterData(renderFilterType, filterByDate, valueDate);
    dataList.appendChild(renderItems(renderFilterLast));
  }
});

const btnClear = document.querySelector("#button-clear");
btnClear.addEventListener("click", function () {
  dataList.innerHTML = ""
  resetFilters();
  //renderData(original);
  dataList.appendChild(renderItems(original));
  renderStats(data);
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
