function counter() {
    let count = 0;
    return function() {
      count++;
      console.log(count);
    }
  }
  const increment = counter();
  increment(); // 1
  increment(); // 2
  increment(); // 3



var x = 234
  function fn(){
    x = 20;
    var x = 11
  
  }

  console.log(x)