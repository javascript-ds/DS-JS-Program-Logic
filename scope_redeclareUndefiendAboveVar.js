var text = 'outside';
var name = 'ahitisham';
function logIt(){      
    console.log(text); //undefined => this will be undefined ,declaring same varible again,once declaring again above will be undefined.    
    console.log(name); //undefined
    var text = 'inside';
    var name = 'sultan';
    console.log(text);
    console.log(name);

};
logIt();






















// let b = 1;
// var b = 2;
// function f() {
//     let b = 3;
//    	console.log(b)
   
// }
// f();