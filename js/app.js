
var numbers=[24,54,99];
maxNumber=findMax(numbers);
//findMax function will return max number from arry of numbers
function findMax(numbers) {
  // body...
  return Math.max.apply(null,numbers);
}

console.log(maxNumber);
