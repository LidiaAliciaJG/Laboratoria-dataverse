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
  let renderFilter=filterData(data,value);
  console.log("elección:infantil",renderFilter);
  renderData(renderFilter);
});
