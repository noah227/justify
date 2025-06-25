# justify

> Pythonic string justify.

## install

```shell
npm i @cynario/justify
```

## usage

```js
import {center, ljust, rjust} from "@cynario/justify"
// import {justify} from "./index"
// justify.ljust
// ...

const s = "hello"

console.log(ljust(s, 8, "*"))
console.log(rjust(s, 8, "*"))
console.log(center(s, 8, "*"))
console.log(center(s, 9, "*"))

// hello***
// ***hello
// *hello**
// **hello**
```
