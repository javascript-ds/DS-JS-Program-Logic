var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo); //bar
        console.log("outer func:  self.foo = " + self.foo); //bar
        console.log("outer func:  self.foo = " + this.foo); //bar
        
        (function() {
            console.log("inner func:  this.foo = " + this.foo);// undefined: In the inner function, though, this keyword no longer refers but self will work
                                                            //because it assign in function;
            console.log("inner func:  self.foo = " + self.foo);
            }());

    }
};
myObject.func();