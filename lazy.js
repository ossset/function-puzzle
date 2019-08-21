const sum = (a, b) => a + b;
const lazy = (...args) => fn => () => fn(...args);
function lazy(...args) {
    return function (fn) {
        return function() {
            return fn(...args)
        }
    }
}
const a = lazy(1, 2)(sum);
console.log(a());
