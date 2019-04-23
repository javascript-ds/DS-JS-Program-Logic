function squareComp(arr1,arr2){
    // make object to return end (squre compare with other array output => [1,3,2,] == [1,4,9]=true || false)
    var result = {};
    // loop over a string for each charcter....
    // check array length is equal
    if(arr1.length !== arr2.length){
        return false;
    }
    //if first array element squre in second array return true
    for (var i=0;i<arr1.length; i++) {
          // indexOf = In which index this value is available 
          // if value is not in array its return index -1
          var arr =[];
          let correctIndex = arr2.indexOf(arr1[i] ** 2);
          console.log(correctIndex);
    }
        // if the charecter is a number/letter AND is a key in object add one to the count ++   
      
        // if the  charecter is in number/letter AND not in object,add it to object and set value to one    
      
   
     // if charecter is domthing else (space, period, etc) don't do aany thing
    // return object at end
   // return result;
}
squareComp([1,3,2,],[1,4,9]);
