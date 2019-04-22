// this is fastest code 
function charCount(str){
    // make object to return end {s: 2, a: 1, n: 1}
    var obj = {};
    // loop over a string for each charcter....
    for (var char of str){
         // if charecter is other then charcter  (space, period, etc) ignore all
         // isAlphaNumeric = ignore other then alphabet and number
         if (isAlphaNumeric(char)){
              char = char.toLowerCase();
              // if the charecter is a number/letter AND is a key in object add one to the count ++  
              /// if (  obj[char]={s:1,....} ) objChar is equalTo objChar then ++ other for this char add 1
              ///  if || else  
              obj[char] = ++obj[char] || 1; 
         }
    }
    // return object at end
      return obj;
}
// isAlphaNumeric //Ignore then AnyThing
function isAlphaNumeric(char) {
    // code a = 97
     var code = char.charCodeAt(0);
     if (!(code > 48 && code < 58) && // numaric(0-9)
         !(code > 64 && code < 91) && // (A-Z)
         !(code > 96 && code < 123)) { //(a-z)
     return false;
     } 
     return true;
}
charCount("019azAZ!");
