const curry = fn => (...args) => {
  if (fn.length > args.length) {
    const f = fn.bind(null, ...args);
    return curry(f);
  } else {
    return fn(...args);
  }
};
const sum = (a, b, c, d, e) => a + b + c + d + e;

const x = curry(sum)(1)(2)(3)(4, 5);
console.log(x);