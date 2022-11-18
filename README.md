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
Elemento img con position absolute.


Elemento img con position fixed


Elemento img envuelto con Absoluted

