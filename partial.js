const partial = (fn, ...args) => (...rest) => fn(...args.concat(rest));
const sum = (a, b) => a + b;
let x = partial(sum, 4)(2);
console.log(`x = ${x}`);
