# React-Absoluted

react-absolute is a react wrapper that **works like a combination of position absolute and fixed**

Elements with position absolute:
- They generate scroll when the size is greater than the viewport
- They are fixed in the defined position with respect to the parent

Elements with position fixed:
- They do not generate scroll when the size is greater than the viewport
- They are fixed in the defined position with respect to the viewport

This wrapper is fixed in the defined position with respect to the parent and does not generate a scroll when the size is greater than the viewport.

## Getting started

```shell
npm install react-absolute
```

Import Absoluted

```jsx
import Absoluted from 'react-absoluted';
// ...
```

Wrap the elementos
```jsx
<Absoluted>
  <img src="/images/bubble1.svg" alt="Image with size greater than the viewport"/>
</Absoluted>
```
## Example
**To understand the example look at the scroll**
Image with position absolute.
![Bubble 1](https://github.com/ccencisoj/react-absoluted/blob/main/docs/images/bubble1.gif)

Image with position fixed
![Bubble 2](https://github.com/ccencisoj/react-absoluted/blob/main/docs/images/bubble2.gif)

Image wrapped with Absoluted
!["Bubble 3"](https://github.com/ccencisoj/react-absoluted/blob/main/docs/images/bubble3.gif)
