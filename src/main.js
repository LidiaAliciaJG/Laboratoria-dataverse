import { example, filterData } from './dataFunctions.js';
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

const btn= document.getElementById("Infantil");
btn.addEventListener("click", function() {
  let value="Infantil";
  let filterBy="type";
  let renderFilter=filterData(data,filterBy,value);
  console.log("elección:infantil",renderFilter);
  renderData(renderFilter);
});

const getvalue= document.getElementById("type-select");
getvalue.addEventListener("change", function() {
  let filterBy="type";
  let value=getvalue.value;
  let renderFilter=filterData(data,filterBy,value);
  console.log("elección:"+filterBy,value,renderFilter);
  renderData(renderFilter);
});

const getfilter= document.getElementById("filter-select");
getfilter.addEventListener("change", function() {
  let filterBy=getfilter.options[getfilter.selectedIndex].parentElement.getAttribute("data-content");
  let value=getfilter.value;
  let renderFilter=filterData(data,filterBy,value);
  console.log("elección:"+filterBy,value,renderFilter);
  renderData(renderFilter);
});