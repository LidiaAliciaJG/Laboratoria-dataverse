# Dataverse
![Logo del proyecto](https://github.com/LidiaAliciaJG/Laboratoria-dataverse/blob/c847600f51222a6e4c4ff75f9e125a845056eab8/src/imagenes/LogoConNombre.png)

Proyecto desarrollado para el Bootcamp de Laboratoria en Desarrollo Web.

Este sitio web permite visualizar un conjunto de datos cuya temática es películas, esta información fue generada con prompting utilizando ChatGPT. Además permite filtrar por categoría y año de estreno, ordenar de ascendente y descendente según su nombre, y se visualizan dos estadíticas: número de películas mostradas y su porcentaje promedio de aceptación según la crítica. 

***

## Índice

* [1. Descripción del proyecto](#descripción-del-proyecto)
* [2. Características de la aplicación](#características-de-la-aplicación)
* [3. Deploy](#deploy)
* [4. Pruebas](#pruebas)
* [5. Tecnologías](#tecnologías)
* [6. Autora](#autora)

## Descripción del proyecto
El sitio web realizado se ha desarrollado para ser utilizado por un usuario que desee encontrar diversos datos sobre películas. Este proyecto es aplicable en el ámbito del entretenimiento para un usuario que disfrute de conocer más sobre películas, así como en el ámbito académico de un estudiante que desee recabar información sobre el arte del cine.

Con el fin de descubrir las necesidades el usuario, se realizaron 5 historias de usuario.
![Historias de usuario]()

A partir de lo anterior, se realizó un prototipado de alta fidelidad con interacción a través de Figma. A continuación se encuentra la versión mobile y la de escritorio que se crearon con el fin de seguir la metodología Mobile First:
[Prototipo de alta resolución para móviles](https://www.figma.com/proto/wEhsKfwlfUiGR9cFomYMqY/Dataverse-Project?type=design&node-id=393-361&t=OfUPieCaUroi7FCw-1&scaling=scale-down&page-id=393%3A23&starting-point-node-id=393%3A361&mode=design)
[Prototipo de alta resolución para escritorio](https://www.figma.com/proto/wEhsKfwlfUiGR9cFomYMqY/Dataverse-Project?type=design&node-id=237-144&t=Z1IuBdZn4yvCWZkQ-1&scaling=scale-down&page-id=4%3A23&starting-point-node-id=237%3A144&mode=design)

Para su desarrollo se realizó una planeación con las etapas que se pueden observar en la siguiente imagen:

![Planificación del proyecto](https://github.com/LidiaAliciaJG/Laboratoria_text-analyzer/blob/65817e0f828d62a1b0b78aeedf908db75b2d2c38/Planeacion.gif)

Tras el inicio del proyecto se eligió la temática de películas, por lo que, con apoyo de ChatGPT, se generaron 24 datos cuyas características eran basadas en 4 géneros y los siguientes:
![Prompt utilizado]()

## Características de la aplicación
El boilerplate del proyecto se divide en un archivo `dataset.js` que contiene el conjunto de datos generados a través de ChatGPT sobre 24 películas de 4 diferentes géneros, en un archivo `index.html`, `style.css` que mantienen la estructura básica y diseño del sitio web, y en tres archivos de JavaScript; `dataFunctions.js`, contiene tres funciones para el filtrado, ordenado y calculo de dos estadísticas, `view.js` en el cual se renderiza el conjunto de datos y `main.js`, el cual mantiene la interacción con el DOM.


### Funcionalidades del proyecto
- `filterData(data, filterBy, value)`: esta función recibe tres parámetros. El primer parámetro, data, nos entrega los datos. El segundo parámetro, filterBy, nos dice con respecto a cuál de los campos de la data se quiere filtrar. El tercer parámetro, value, indica el valor de campo que queremos filtrar.
- `sortData(data, sortBy, sortOrder)`: esta función sort u ordenar recibe tres parámetros. El primer parámetro, data, nos entrega los datos. El segundo parámetro, sortBy, nos dice con respecto a cuál de los campos de la data se quiere ordenar. El tercer parámetro, sortOrder, indica si se quiere ordenar de manera ascendente o descendente.
- `computeStats(data)`: la función compute o calcular, nos permitirá hacer cálculos estadísticos básicos para ser mostrados de acuerdo a la data proporcionada, esta función debe usar el método reduce.
- `test/dataFunctions.spec.js`: En este archivo tendrás hacer pruebas unitarias de las funciones implementadas en el archivo dataFunctions.js. (filterBy, sortBy, etc.)
-  `renderItems(data)`: esta función recibe el arreglo de data para renderizar los elementos de cada item, y debería volver un elemento DOM o un string de HTML.

## Deploy
La aplicación se encuentra publicado a través de Github Pages, accesible a todo usuario: [Link](https://lidiaaliciajg.github.io/Laboratoria-dataverse/src/index.html).

## Pruebas
El proyecto contiene una configuración de 3 test donde se evalúa el funcionamiento y requirimientos esperados. Además se incluyó un test de pruebas unitarias, realizado con Jest, para evaluar las funciones realizadas de filtrado, ordenado y calculo de estadísticas.


## Tecnologías
* HTML
* CSS
* JavaScript
* Jest
* ChatGPT
* Figma

## Autora

| [<img src="https://github.com/LidiaAliciaJG.png?size=139">](https://github.com/LidiaAliciaJG) | [Lidia Alicia JG](https://github.com/LidiaAliciaJG) <br> <sub>[Sitio web](https://lidiaaliciajg.github.io/)</sub> <br> <sub>[LinkedIn](https://www.linkedin.com/in/lidiaaliciajg/)</sub> |
| :---: | :---: |
