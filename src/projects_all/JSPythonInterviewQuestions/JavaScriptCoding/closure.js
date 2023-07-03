function foo(x) {
    function foo1 (y) {
      console.log(x + y); // will also log 16
    }
    return foo1
  }
  
  var bar = foo(2);
  bar(20)

