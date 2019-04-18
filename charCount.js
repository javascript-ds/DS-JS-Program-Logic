function charCount(str){
    // make object to return end
    var result = [];
    // loop over a string for each charcter
    for (var i=0; i< str.length; i++){
        var char = str[i]
        // confusion result[char]
        if(result[char] > 0){
            result[char]++;
           
        }
        else {
            result[char] = 1;
        }
    }
     console.log(result);
}
charCount("ssan");
