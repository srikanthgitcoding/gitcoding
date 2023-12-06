function foo(x) {
  const f =()=>10
    function foo1 (y) {
      console.log(x + y + f()); // will also log 16
    }
    return foo1
  }
  
  var bar = foo(2);
  bar(20)
  bar(40)


