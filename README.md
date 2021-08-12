# FreddyVideo
FreddyVideo es un proyecto creado en la escuela de JavaScript de Platzi.

### ¿Que es REACT? 
**React** (también llamada React.js o ReactJS) es una biblioteca *Javascript* de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por **Facebook** y la comunidad de software libre, han participado en el proyecto más de mil desarrolladores diferentes.

**React** intenta ayudar a los desarrolladores a construir aplicaciones que usan datos que cambian todo el tiempo. Su objetivo es ser sencillo, declarativo y fácil de combinar. **React** sólo maneja la interfaz de usuario en una aplicación; **React** es la Vista en un contexto en el que se use el patrón MVC (Modelo-Vista-Controlador) o MVVM (Modelo-vista-modelo de vista). 

También puede ser utilizado con las extensiones de React-based que se encargan de las partes no-UI (que no forman parte de la interfaz de usuario) de una aplicación web. Según el servicio de análisis Javascript (en inglés "javascript analytics service"), Libscore, React actualmente está siendo utilizado en las páginas principales de Imgur, Bleacher Informe, Feedly, Airbnb, SeatGeek, HelloSign, y otras.

#### ¿Qué es el DOM virtual? 
El **DOM** virtual (**VDOM**) es un concepto de programación donde una representación ideal o “virtual” de la IU se mantiene en memoria y en sincronía con el **DOM** “real”, mediante una biblioteca como ReactDOM. Este proceso se conoce como reconciliación. 

Este enfoque hace posible la API declarativa de **React**: le dices a **React** en qué estado quieres que esté la IU, y se hará cargo de llevar el **DOM** a ese estado. Esto abstrae la manipulación de atributos, manejo de eventos y actualización manual del **DOM** que de otra manera tendrías que usar para construir tu aplicación. Ya que **“Virtual DOM**” es más un patrón que una tecnología específica, las personas a veces le dan significados diferentes. En el mundo de React, el término **“Virtual DOM**” es normalmente asociado con elementos de React ya que son objetos representando la interfaz de usuario.

Sin embargo, **React** también usa objetos internos llamados “fibers” para mantener información adicional acerca del árbol de componentes. Éstos pueden ser también considerados como parte de la implementación de **“Virtual DOM**" de **React**.

#### Create React App 
**Create React App** es un ambiente cómodo para aprender **React**, y es la mejor manera de comenzar a construir una nueva aplicación de página única usando **React**.

**Create React App** configura tu ambiente de desarrollo de forma que puedas usar las últimas características de *Javascript*, brindando una buena experiencia de desarrollo, y optimizando tu aplicación para producción. **Create React App** no se encarga de la lógica de backend o de bases de datos; tan solo crea un flujo de construcción para frontend, de manera que lo puedes usar con cualquier backend. Para ello internamente usa *Babel* y *webpack*, pero no necesitas saber nada de estas herramientas para usar **Create React App**. Cuando estés listo para desplegar a producción, ejecuta npm run build lo cual crea una compilación optimizada de tu aplicación en el directorio build.

#### JSX 
Se llama **JSX**, y es una extensión de la sintaxis de *JavaScript*. Recomendamos usarlo con **React** para describir cómo debería ser la interfaz de usuario. **JSX** puede recordarte a un lenguaje de plantillas, pero viene con todo el poder de *JavaScript*. ¿Por qué **JSX**? React acepta el hecho de que la lógica de renderizado está intrínsecamente unida a la lógica de la interfaz de usuario: cómo se manejan los eventos, cómo cambia el estado con el tiempo y cómo se preparan los datos para su visualización. En lugar de separar artificialmente tecnologías poniendo el maquetado y la lógica en archivos separados, **React** separa intereses con unidades ligeramente acopladas llamadas “componentes” que contienen ambas.

#### ¿Qué son los métodos del ciclo vida? 
Todos los componentes en **React** pasan por una serie de fases que generalmente se denominan **“Ciclo de Vida del componente”** es un proceso que **React** hace en cada componente, en algunos casos no podemos verlos como un bloque de código y en otros podemos llamarlos en nuestro componente para asignar una actividad según sea el caso necesario.

##### Los componentes en react pasan por un Montaje, Actualización, Desmontaje y Manejo de errores. 

- **Montaje**: En esta fase nuestro componente se crea junto a la lógica y los componentes internos y luego es insertado en el **DOM**. 
- **Actualización**: En esta fase nuestro componente está al pendiente de cambios que pueden venir a través de un cambio en “state” o “props” esto en consecuencia realizan una acción dentro de un componente.
- **Desmontaje**: En esta etapa nuestro componente “Muere” cuando nosotros no necesitamos un elemento de nuestra aplicación, podemos pasar por este ciclo de vida y de esta forma eliminar el componente de la representación que tiene en el **DOM**.
- **Manejo de Errores**: Cuando nuestro código se ejecuta y tiene un error, podemos entrar en una fase donde se puede entender mejor qué está sucediendo con la aplicación. Algo que debemos tener en cuenta es que un componente NO debe pasar por toda las fases, un componente puede ser montado y desmontado sin pasar por la fase de actualización o manejo de errores.


#### Babel 
**Babel** es un compilador de *JavaScript* gratuito y de código abierto que se utiliza principalmente para convertir el código ECMAScript 2015+ (ES6 +) en una versión de *JavaScript* compatible con versiones anteriores que pueden ejecutar los motores *JavaScript* más antiguos . **Babel** es una herramienta popular para usar las funciones más nuevas del lenguaje de programación *JavaScript*.

#### Webpack 
**Webpack** es un módulo empaquetador de *JavaScript* de código abierto. Es un paquete de módulos principalmente para *JavaScript*, pero puede transformar activos front-end como HTML, CSS e imágenes si se incluyen los complementos correspondientes. **Webpack** toma módulos con dependencias y genera activos estáticos que representan esos módulos. 

##### webpack-dev-server
Use **webpack** con un servidor de desarrollo que proporcione recarga en vivo. Esto debe usarse solo para el desarrollo . Utiliza webpack-dev-middleware debajo del capó, que proporciona acceso rápido en memoria a los activos del paquete web.

#### SASS
Los preprocesadores como **Sass** son herramientas que nos permiten escribir CSS con una sintaxis ligeramente diferente y más amigable que luego se transformará en CSS normal. Gracias a **Sass** podemos escribir CSS con variables, mixins, loops, entre otras funcionalidades.

#### Webpack File Loader
**Webpack File Loader** accede a las imágenes del proyecto desde el código. Inicialmente, estos archivos estáticos se encuentran junto al código de desarrollo. Pero en el momento de la compilación, **Webpack** guardará las imágenes en una nueva carpeta junto al código de producción y actualizará nuestros componentes (o donde sea que usemos las imágenes) con los nuevos nombres de archivo y rutas.

#### React Hooks
Los** React Hooks** son una característica de **React** que tenemos disponible a partir de la versión 16.8. Nos permiten agregar estado y ciclo de vida a nuestros componentes creados como funciones.

##### Hook useState
El **Hook useState** nos devuelve un array con dos elementos: la primera posición es el valor de nuestro estado, la segunda es una función que nos permite actualizar ese valor. El argumento que enviamos a esta función es el valor por defecto de nuestro estado (initial state).

##### Hook useEffect
El **Hook useEffect** nos permite ejecutar código cuando se monta, desmonta o actualiza nuestro componente. El primer argumento que le enviamos a **useEffect** es una función que se ejecutará cuando **React** monte o actualice el componente. Esta función puede devolver otra función que se ejecutará cuando el componente se desmonte. El segundo argumento es un array donde podemos especificar qué propiedades deben cambiar para que **React** vuelva a llamar nuestro código. 

Si el componente actualiza pero estas props no cambian, la función no se ejecutará. Por defecto, cuando no enviamos un segundo argumento, **React** ejecutará la función de **useEffect** cada vez que el componente o sus componentes padres actualicen. En cambio, si enviamos un array vacío, esta función solo se ejecutará al montar o desmontar el componente.
