import test from "ava";
import { camelizeAccesor } from "./index.js";

test("should allow camelCase accessors", (t) => {
  const proxied = camelizeAccesor({
    my_value: "it works",
  });
  t.is(proxied.myValue, "it works");
});

test("should handled nested accesors", (t) => {
  const proxied = camelizeAccesor({
    my_value: {
      another_value: {
        we_nesting_hard_here_boys: "it works",
      },
    },
  });
  t.is(proxied.myValue.anotherValue.weNestingHardHereBoys, "it works");
});

test("should allow snake_case accessors", (t) => {
  const proxied = camelizeAccesor({
    my_value: "it works",
  });
  t.is(proxied.my_value, "it works");
});

test("should fail when the property is not existant", (t) => {
  const proxied = camelizeAccesor({
    my_value: 'it works',
  });
  t.falsy(proxied.myNonExistantValue);
  t.falsy(proxied.my_value_that_does_not_exist);
});
