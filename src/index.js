import snakecase from "lodash.snakecase";

export function camelizeAccesor(obj) {
  const handler = {
    get: (target, prop) => {
      const value = target[snakecase(prop)];
      if (typeof value === "object") {
        return new Proxy(value, handler);
      }
      if (typeof prop === "string") {
        return value;
      }
      return Reflect.get(target, prop);
    },
  };
  return new Proxy(obj, handler);
}
