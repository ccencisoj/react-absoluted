# React-Absoluted

react-absolute es un envoltorio de react que **funciona como una combinación de position absolute y fixed**. 

Los elementos con position absolute:
- Generan scroll cuando el tamaño es mayor al viewport
- Quedan fijos en la posición definida con respecto al padre

Los elementos con position fixed:
- No generan scroll cuando el tamaño es mayor al viewport
- Quedan fijos en la posición definida con respecto al viewport

Este envoltorio queda fijo en la posición definida con respecto al padre y no genera scroll cuando el tamaño es mayor al viewport. 

## Getting started

```shell
npm install react-absolute
```

Importar Absoluted

```jsx
import Absoluted from 'react-absoluted';
// ...
```

Envolver los elementos
```jsx
<Absoluted>
  <img src="/images/bubble1.svg" alt="Una imagen con tamaño mayor al viewport"/>
</Absoluted>
```
## Example
Imagen con position absolute.
![Bubble 1](https://github.com/ccencisoj/react-absoluted/blob/main/docs/images/bubble1.gif)

Imagen con position fixed
![Bubble 2](https://github.com/ccencisoj/react-absoluted/blob/main/docs/images/bubble2.gif)

Imagen envuelta con Absoluted
!["Bubble 3"](https://github.com/ccencisoj/react-absoluted/blob/main/docs/images/bubble3.gif)
