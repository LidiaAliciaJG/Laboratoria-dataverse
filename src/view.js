export const renderItems = (data) => {
  // Aquí comienza tu código y puedes retornar lo que tu necesites GENERACION DINAMICA
  const itemList = document.createElement("li");
  const itemContainer = document.createElement("dl");
  itemContainer.classList.add("card");
  
  itemContainer.innerHTML=`
        <img src=${data.imageUrl} alt=${data.name} />
        <dt>Nombre:</dt><dd itemprop="name">${data.name}</dd>
        <dt>Categoría:</dt><dd itemprop="type">${data.type}</dd>
        <dt>Descripción:</dt><dd itemprop="description">${data.shortDescription}</dd>
        <dt>Fecha de Estreno:</dt><dd itemprop="releaseDate">${data.facts.releaseDate}</dd>
        <dt>Actores Principales:</dt><dd itemprop="mainActors">${data.facts.mainActors.join(", ")}</dd>
        <dt>Premios:</dt><dd itemprop="awards">${data.facts.awards}</dd>
        <dt>Presupuesto:</dt><dd itemprop="budget">${data.facts.budget}</dd>
        <dt>Calificación de la Crítica:</dt><dd itemprop="criticRating">${data.facts.criticRating}</dd>
        <dt>Calificación de la Audiencia:</dt><dd itemprop="audienceRating">${data.facts.audienceRating}</dd>
      `

  itemContainer.setAttribute("itemscope","");
  itemContainer.setAttribute("itemtype","películas");

  itemList.appendChild(itemContainer);

  return itemList;
};