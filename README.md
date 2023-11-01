# Dataverse
![Logo del proyecto](https://github.com/LidiaAliciaJG/Laboratoria-dataverse/blob/71e943315bd45c09011adedefccb324e2552c85b/imagenes/Logo.png)

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
![Prototipo de alta resolución para móviles](https://www.figma.com/proto/wEhsKfwlfUiGR9cFomYMqY/Dataverse-Project?type=design&node-id=393-361&t=OfUPieCaUroi7FCw-1&scaling=scale-down&page-id=393%3A23&starting-point-node-id=393%3A361&mode=design)

A partir de lo anterior, se realizó un prototipado de alta fidelidad con interacción a través de Figma. A continuación se encuentra la versión mobile y la de escritorio que se crearon con el fin de seguir la metodología Mobile First:
[Prototipo de alta resolución para móviles](https://www.figma.com/proto/wEhsKfwlfUiGR9cFomYMqY/Dataverse-Project?type=design&node-id=393-361&t=OfUPieCaUroi7FCw-1&scaling=scale-down&page-id=393%3A23&starting-point-node-id=393%3A361&mode=design)
[Prototipo de alta resolución para escritorio](https://www.figma.com/proto/wEhsKfwlfUiGR9cFomYMqY/Dataverse-Project?type=design&node-id=237-144&t=Z1IuBdZn4yvCWZkQ-1&scaling=scale-down&page-id=4%3A23&starting-point-node-id=237%3A144&mode=design)

Para su desarrollo se realizó una planeación con las etapas que se pueden observar en la siguiente imagen:

![Planificación del proyecto](https://github.com/LidiaAliciaJG/Laboratoria_text-analyzer/blob/65817e0f828d62a1b0b78aeedf908db75b2d2c38/Planeacion.gif)

## Características de la aplicación
El proyecto mantiene la siguiente estructura:

![Distribución de estructura](https://github.com/LidiaAliciaJG/Laboratoria_text-analyzer/blob/12f96cd69445e6464cfc74c4798ed95cf562d09f/Distribucion.png)

### Funcionalidades del proyecto
- `Cantidad de palabras`: Cuenta las palabras en el texto de entrada y muestra la cantidad al usuario.
- `Cantidad de caracteres`: Cuenta el número de carácteres en el texto de entrada, incluidos espacios y signos de puntuación, y muestra la cantidad al usuario.
- `Cantidad de solo caracteres`: Cuenta el número de carácteres en el texto de entrada sin considerar los espacios ni signos de puntuación, y se muestra la cantidad al usuario.
- `Cantidad de números`: Cuenta cuántos números hay en el texto de entrada, sin considerar los números dentro de una palabra y muestra la cantidad al usuario.
-  `Suma de los números`: Considerando los números que hay en el texto de entrada con la condición anterior, suma todas las cifras y muestra el resultado al usuario.
-  `Longitud promedio de las palabras`: Calcula el promedio de caracterés que incluyen las palabras en el texto de entrada y muestra el resultado al usuario.
-  `Botón de Borrar`: Botón que permite al usuario eliminar cualquier dato ingresado en la entrada de texto y las métricas mostradas se resetean.
-  `Entrada de texto`: Permite al usuario ingresar el texto que desea analizar.

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
