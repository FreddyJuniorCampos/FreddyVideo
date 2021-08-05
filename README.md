¿Que es REACT?
React (también llamada React.js o ReactJS) es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre, han participado en el proyecto más de mil desarrolladores diferentes.
React intenta ayudar a los desarrolladores a construir aplicaciones que usan datos que cambian todo el tiempo. Su objetivo es ser sencillo, declarativo y fácil de combinar. React sólo maneja la interfaz de usuario en una aplicación; React es la Vista en un contexto en el que se use el patrón MVC (Modelo-Vista-Controlador) o MVVM (Modelo-vista-modelo de vista). También puede ser utilizado con las extensiones de React-based que se encargan de las partes no-UI (que no forman parte de la interfaz de usuario) de una aplicación web.
Según el servicio de análisis Javascript (en inglés "javascript analytics service"), Libscore, React actualmente está siendo utilizado en las páginas principales de Imgur, Bleacher Informe, Feedly, Airbnb, SeatGeek, HelloSign, y otras.

¿Qué es el DOM virtual?
El DOM virtual (VDOM) es un concepto de programación donde una representación ideal o “virtual” de la IU se mantiene en memoria y en sincronía con el DOM “real”, mediante una biblioteca como ReactDOM. Este proceso se conoce como reconciliación.
Este enfoque hace posible la API declarativa de React: le dices a React en qué estado quieres que esté la IU, y se hará cargo de llevar el DOM a ese estado. Esto abstrae la manipulación de atributos, manejo de eventos y actualización manual del DOM que de otra manera tendrías que usar para construir tu aplicación.
Ya que “DOM virtual” es más un patrón que una tecnología específica, las personas a veces le dan significados diferentes. En el mundo de React, el término “DOM virtual” es normalmente asociado con elementos de React ya que son objetos representando la interfaz de usuario. Sin embargo, React también usa objetos internos llamados “fibers” para mantener información adicional acerca del árbol de componentes. Éstos pueden ser también considerados como parte de la implementación de “DOM virtual” de React.

Create React App
Create React App es un ambiente cómodo para aprender React, y es la mejor manera de comenzar a construir una nueva aplicación de página única usando React.
Create React App configura tu ambiente de desarrollo de forma que puedas usar las últimas características de Javascript, brindando una buena experiencia de desarrollo, y optimizando tu aplicación para producción.
Create React App no se encarga de la lógica de backend o de bases de datos; tan solo crea un flujo de construcción para frontend, de manera que lo puedes usar con cualquier backend. Para ello internamente usa Babel y webpack, pero no necesitas saber nada de estas herramientas para usar Create React App.
Cuando estés listo para desplegar a producción, ejecuta npm run build lo cual crea una compilación optimizada de tu aplicación en el directorio build.

JSX
Se llama JSX, y es una extensión de la sintaxis de JavaScript. Recomendamos usarlo con React para describir cómo debería ser la interfaz de usuario. JSX puede recordarte a un lenguaje de plantillas, pero viene con todo el poder de JavaScript.
¿Por qué JSX?
React acepta el hecho de que la lógica de renderizado está intrínsecamente unida a la lógica de la interfaz de usuario: cómo se manejan los eventos, cómo cambia el estado con el tiempo y cómo se preparan los datos para su visualización.
En lugar de separar artificialmente tecnologías poniendo el maquetado y la lógica en archivos separados, React separa intereses con unidades ligeramente acopladas llamadas “componentes” que contienen ambas.

¿Qué son los métodos del ciclo vida?
Todos los componentes en React pasan por una serie de fases que generalmente se denominan “Ciclo de Vida del componente” es un proceso que React hace en cada componente, en algunos casos no podemos verlos como un bloque de código y en otros podemos llamarlos en nuestro componente para asignar una actividad según sea el caso necesario.

Los componentes en react pasan por un Montaje, Actualización, Desmontaje y Manejo de errores.
Montaje:
En esta fase nuestro componente se crea junto a la lógica y los componentes internos y luego es insertado en el DOM.
Actualización:
En esta fase nuestro componente está al pendiente de cambios que pueden venir a través de un cambio en “state” o “props” esto en consecuencia realizan una acción dentro de un componente.
Desmontaje:
En esta etapa nuestro componente “Muere” cuando nosotros no necesitamos un elemento de nuestra aplicación, podemos pasar por este ciclo de vida y de esta forma eliminar el componente de la representación que tiene en el DOM.
Manejo de Errores:
Cuando nuestro código se ejecuta y tiene un error, podemos entrar en una fase donde se puede entender mejor qué está sucediendo con la aplicación.
Algo que debemos tener en cuenta es que un componente NO debe pasar por toda las fases, un componente puede ser montado y desmontado sin pasar por la fase de actualización o manejo de errores.

Montado:
Constructor()
Este es el primer método al que se hace un llamado, aquí es donde se inicializan los métodos controladores, eventos del estado.
getDerivedStateFromProps()
Este método se llama antes de presentarse en el DOM y nos permite actualizar el estado interno en respuesta a un cambio en las propiedades, es considerado un método de cuidado, ya que su implementación puede causar errores sutiles.
render()
Si queremos representar elementos en el DOM en este método es donde se escribe esta lógica, usualmente utilizamos JSX para trabajar y presentar nuestra aplicación.
ComponentDidMount()
Este método se llama inmediatamente que ha sido montado en el DOM, aquí es donde trabajamos con eventos que permitan interactuar con nuestro componente.
Actualización:
getDerivedStateFromProps()
Este método es el primero en ejecutarse en la fase de actualización y funciona de la misma forma que en el montaje.
shouldComponentUpdate()
Dentro de este método se puede controlar la fase de actualización, podemos devolver un valor entre verdadero o falso si queremos actualizar o no el componente y es utilizado principalmente para optimización.
render()
Se llama el método render que representa los cambios en el DOM.
componentDidUpdate()
Este método es invocado inmediatamente después de que el componente se actualiza y recibe como argumentos las propiedades y el estado y es donde podemos manejar nuestro componente.
Desmontado
componentWillUnmount()
Este método se llama justo antes de que el componente sea destruido o eliminado del DOM.
Manejo de Errores:
getDerivedStateFromError()
Una vez que se lanza un error este es el primer método que se llama, el cual recibe el error como argumento y cualquier valor devuelto en este método es utilizado para actualizar el estado del componente.
componentDidCatch()
Este método es llamado después de lanzarse un error y pasa como argumento el error y la información representada sobre el error.

Babel
Babel es un compilador de JavaScript gratuito y de código abierto que se utiliza principalmente para convertir el código ECMAScript 2015+ (ES6 +) en una versión de JavaScript compatible con versiones anteriores que pueden ejecutar los motores JavaScript más antiguos . Babel es una herramienta popular para usar las funciones más nuevas del lenguaje de programación JavaScript.

Webpack
Webpack es un módulo empaquetador de JavaScript de código abierto. Es un paquete de módulos principalmente para JavaScript, pero puede transformar activos front-end como HTML, CSS e imágenes si se incluyen los complementos correspondientes.Webpack toma módulos con dependencias y genera activos estáticos que representan esos módulos.
webpack-dev-server
Use webpack con un servidor de desarrollo que proporcione recarga en vivo. Esto debe usarse solo para el desarrollo .
Utiliza webpack-dev-middleware debajo del capó, que proporciona acceso rápido en memoria a los activos del paquete web.

Estilos con SASS
Los preprocesadores como Sass son herramientas que nos permiten escribir CSS con una sintaxis ligeramente diferente y más amigable que luego se transformará en CSS normal. Gracias a Sass podemos escribir CSS con variables, mixins, loops, entre otras funcionalidades.

Agregar imágenes con Webpack
File Loader accede a las imágenes del proyecto desde el código.
Inicialmente, estos archivos estáticos se encuentran junto al código de desarrollo. Pero en el momento de la compilación, Webpack guardará las imágenes en una nueva carpeta junto al código de producción y actualizará nuestros componentes (o donde sea que usemos las imágenes) con los nuevos nombres de archivo y rutas.

React Hooks
Los React Hooks son una característica de React que tenemos disponible a partir de la versión 16.8. Nos permiten agregar estado y ciclo de vida a nuestros componentes creados como funciones.
El Hook useState nos devuelve un array con dos elementos: la primera posición es el valor de nuestro estado, la segunda es una función que nos permite actualizar ese valor.
El argumento que enviamos a esta función es el valor por defecto de nuestro estado (initial state).
El Hook useEffect nos permite ejecutar código cuando se monta, desmonta o actualiza nuestro componente.
El primer argumento que le enviamos a useEffect es una función que se ejecutará cuando React monte o actualice el componente. Esta función puede devolver otra función que se ejecutará cuando el componente se desmonte.
El segundo argumento es un array donde podemos especificar qué propiedades deben cambiar para que React vuelva a llamar nuestro código. Si el componente actualiza pero estas props no cambian, la función no se ejecutará.
Por defecto, cuando no enviamos un segundo argumento, React ejecutará la función de useEffect cada vez que el componente o sus componentes padres actualicen. En cambio, si enviamos un array vacío, esta función solo se ejecutará al montar o desmontar el componente.

¿Que es Redux?
Redux nos permite tener un contenedor predecible del estado en aplicaciones creadas con JavaScript, Nos ayuda a escribir aplicaciones que se comportan de una manera consistente, Esto significa que podemos utilizar esta lógica en aplicaciones del lado del cliente, trabajar del lado del servidor o crear aplicaciones para dispositivos móviles.
Uno de los principales uso que tiene Redux es con React pero puede ser implementado en cualquier librería o proyecto que este construido con JavaScript, lo cual incluye a Angular, Vue o algún otro framework o librería.
Redux nace de la arquitectura Flux, tomando inspiración del lenguaje funcional Elm y es creado por Dan Abramov y Andrew Clark en el 2015, Hoy en día es una de las librerías más utilizadas para el manejo del flujo de la información en aplicaciones.
Una de las principales motivaciones para crear Redux nace en resolver un problema y era el manejo del estado y el flujo de nuestras aplicaciones creadas en JavaScript. Redux propone una forma de manejar el estado donde podamos controlar cómo vamos a interactuar con otros elementos (llamadas a un API) o interacciones dentro de nuestra aplicación, teniendo en cuenta esto, Redux intenta de predecir las mutaciones que pueda sufrir el estado, creando restricciones de cuando y como pueden ser ejecutadas las actualizaciones en nuestras aplicaciones.
Redux es una librería muy pequeña que se puede incorporar en cualquier proyecto construido en JavaScript y se basa en tres principios:
Única fuente de la verdad:
Nuestra aplicación solo debe de tener un único Store y es la única fuente de información.
El estado es de solo lectura
La única forma de modificar el estado es emitiendo un acción, este objeto describe lo que va a ocurrir.
Los cambios se realizan con funciones puras
Para realizar cambios al estado es necesario utilizar Reducers los cuales son funciones puras que toman el estado anterior, una acción y devuelve un nuevo estado con las modificaciones necesarias.
