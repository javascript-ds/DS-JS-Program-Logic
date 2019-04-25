(function(){
    //scope : for local scope a=3,b=3 but b is without var so it become global varible ,so it can access throughout program.
    var a = b = 3;
    console.log(a);
})();
console.log(b);