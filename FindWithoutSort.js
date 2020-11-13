let number = 0;
let arrayNumbers = new Array();
for(let i = 0; i < 10; i++){
  number = Math.floor(Math.random() * 1000);
  arrayNumbers.push(number);
}
function secondSmallest(array){
  let minimum = Math.min.apply(null, array);
  let minimumIndex = array.indexOf(minimum);
  array[minimumIndex] = Infinity;
  let secondMinimum = Math.min.apply(null, array);
  array[minimumIndex] = minimum;
  return secondMinimum;
}

function secondLargest(array){
  let maximum = Math.max.apply(null, array), 
  maxindex = array.indexOf(maximum);
  array[maxindex] = -Infinity;
  let secondMaximum = Math.max.apply(null, array); 
  array[maxindex] = maximum;
  return secondMaximum;
}
for(let i = 0; i < 10; i++){
  console.log(arrayNumbers[i]);
}
console.log("2nd Largest is " + secondLargest(arrayNumbers));
console.log("2nd Smallest is " + secondSmallest(arrayNumbers));