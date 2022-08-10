import get from "lodash/get";
import range from "underscore/modules/range";

const foo = { bar: "foobar" };

console.log(get(foo, "bar"));

console.log(range(1, 11).join(",\n"));
