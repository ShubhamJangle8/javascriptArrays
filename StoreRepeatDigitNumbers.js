let array = new Array();
for(let i = 0; i <= 100; i++){
  array.push(i);
}
for(let i = 0; i <= 100; i++){
  if(array[i] % 11 == 0 && array[i] != 0){
    console.log(array[i]);
  }
}