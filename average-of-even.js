const arr = [1, 23, 2, 6, 12, 0];

const averageEven = arr => {
  const evenArray = arr.filter(item => item % 2 === 0);
  const evenCount = evenArray.length;
  const evenSum = evenArray.reduce((a, b) => a + b);

  return evenSum / evenCount;
};



console.log(averageEven(arr));

