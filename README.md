

Javier Vargas Breval
Prueba acceso ReactJS - Lista de películas y series


### ¿Cómo decidió las opciones técnicas y arquitectónicas utilizadas como parte de su solución?

- Como el proyecto indicaba, he dividido la estructura en tres páginas: Inicio, Series y Películas
- Para acceder a cada una de ellos, he usado un sistema de navegación simple (evitando usar una librería externa como react-router-dom), centrando cada una de estas páginas entre un componente Header y un componente Footer
- Dentro de las páginas Series y Películas se ejecuta el componente Result
- En este componente está la mayor parte de la lógica del programa. Utilizo una función para hacer el fetch (se puede usar también si se instala la librería axios solo cambio un dato) y recoger los datos. Tras eso, y tras realizar diferentes comprobaciones, los filtro y ordeno y envío a otro componente que los lista en un grid. También están las funciones para.
- A nivel de CSS, suelo utilizar "ayudas" externas para ganar tiempo, principalmente estoy acostumbrado a usar Tailwind CSS (aunque ya sé que los estilos inline ensucian mucho el código) o Material UI, DaisyUI para componentes, pero para no instalar nada he tirado de CSS puro.

### ¿Hay alguna mejora que pueda hacer en su envío?

- Mejorar el aspecto visual, completando todo el CSS y que sea 100% responsivo
- Estructurar más el código, es decir, sacar más funciones fuera para que el componente Result quede más "limpio".
- Test. Conozco herramientas como Jest pero no he llegado a aplicarlas en profundidad.

### ¿Qué haría de manera diferente si se le asignara más tiempo?
- Usar herramientas de gestión estados con Redux o useContext, pero al ser un proyecto pequeño y no necesitarlo realmente para empezar me he centrado en lo básico. Por ejemplo, al ser una petición de datos muy concreta, lo ideal es que sólo realizara el fetch una vez y no lo repetiera.
- Hacer una función para que el popup se cierre si hay click o touch fuera de él
- Hacer el sistema de paginación
- En cuanto al CSS, seguir mejorando el aspecto visual. Quizá usar styled-components, por ejemplo.

## Problemas con BitBucket

Bitbucket estaba presentando problemas así que no he podido clonar el repositorio hasta las 9 o así.

https://bitbucket.status.atlassian.com/incidents/mn08j05ms7wx
...
Investigating
An increased error rate in git clones has been observed, the team is currently investigating.
Posted 1 hour ago. Jun 06, 2023 - 06:48 UTC
Resolved
All Bitbucket Cloud services have been restored, the team is continuing to investigate the cause of the error.
Posted 1 minute ago. Jun 06, 2023 - 08:00 UTC
...

Así pues me he centrado más en que funcionara la lógica y he dejado el aspecto visual