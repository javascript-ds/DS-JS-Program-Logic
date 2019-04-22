// for...of loop and a for...in loop. While for...in iterates over property names, for...of iterates over property values:
var arr = [3, 5, 7];

// i
for (var i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

// arr[i]
for (var i of arr) {
   console.log(i); // logs 3, 5, 7
}
 console.log("iiiiiiiiiiiiiiiiiiiii"); 

// for
for (i = 0; i < arr.length; i++){
  // console.log(i); 
  console.log(arr[i]); 
}