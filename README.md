# camelize-proxy

Allow access to objects via camel casing without manipulating the object

## Useage

```js
import { camelizeProxy } from "camelize-proxy";

const obj = camelizeProxy({
  my_value: "this is a value",
});

console.log(obj.myValue === obj.my_value);
```
