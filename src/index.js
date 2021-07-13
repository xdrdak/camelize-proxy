function snakecase(str) {
  return str.replace(/([A-Z])/g, function ($1) {
    return "_" + $1.toLowerCase();
  });
}

export function camelizeProxy(obj) {
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
