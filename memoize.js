const memo = fn => {
  const cache = new Map();
  
  return (...args) => {
    const key = args.join("");
    if (cache.has(key)) {
      return cache.get(key);
    }
    cache.set(key, fn(...args));

    return cache.get(key);
  };
};

const factorial = memo(x => {
  console.log(x);
  if (x === 1) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
});

console.log(factorial(5));
console.log(factorial(5));
// console.log(JSON.stringify(cache));
