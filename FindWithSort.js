let array = new Array();
for(let i = 0; i < 10; i++){
  array.push(Math.floor(Math.random() * 1000));
}
let sortArray = new Array();
sortArray = array.sort();
for(let i = 0; i < 10; i++){
  console.log(sortArray[i]);
}
console.log("2nd largest number is " + sortArray[sortArray.length - 2]);
console.log("2nd smallest number is " + sortArray[1]);