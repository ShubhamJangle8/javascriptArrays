let myZeroArray = new Array(2,3,-5);
let myNotZeroArray = new Array(2,3,-4);
function checkZeroArray(array){
  array.forEach(i => console.log(i));
  if(array.reduce(getSum) == 0)
    console.log("Sum is zero...");
  else
    console.log("Sum is not zero...");
}
checkZeroArray(myZeroArray);
checkZeroArray(myNotZeroArray);

function getSum(total, number){
  return total + number;
}