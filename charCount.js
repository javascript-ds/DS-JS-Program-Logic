function charCount(str){
    // make object to return end
    var result = [];
    // loop over a string for each charcter....
    for (var i=0; i< str.length; i++){
        var char = str[i].toLowerCase()
        // if the charecter is a number/letter AND is a key in object add one to the count ++   
        if(result[char] > 0){ //result=undefine,s:1,s:2,a:1,n:1
            result[char]++;
        }
        // if the  charecter is in number/letter AND not in object,add it to object and set value to one    
        else {
            result[char] = 1;
        }
    }
     // if charecter is domthing else (space, period, etc) don't do aany thing
    // return object at end
    return result;
}
charCount("Ssan");
