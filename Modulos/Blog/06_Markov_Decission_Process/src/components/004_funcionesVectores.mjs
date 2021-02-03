export {arraySum, arrayMean};

function arraySum(array) {
  return array.reduce( (x, y) => {return x + y} )
}

function arrayMean(array) {
  let n = array.length;
  let sum = array.reduce( (x, y) => {return x + y;});
  return sum/n;
}
