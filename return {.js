function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return     // { = after return you should write '{' otherwise retrun => undefiend  
  {
      bar: "hello"
  };
}
console.log(foo1());
console.log(foo2());

/////
console.log(0.1 + 0.2); //3.0
console.log(0.1 + 0.2 == 0.3); //false

/////
(function() {
    console.log(1); 
    setTimeout(function(){console.log(2)}, 1000); 
    setTimeout(function(){console.log(3)}, 0); 
    console.log(4);
})();
// output= 1 4 3 2