var s = Symbol("foo");
var k = "bar";
var o = { [s]: 1, [k]: 1 };
// getOwnPropertyNames获取到String类型的key，getOwnPropertySymbols获取到Symbol类型的key
var keys = Object.getOwnPropertyNames(o).concat(
  Object.getOwnPropertySymbols(o)
);
console.log(k);
console.log(keys);
