function myfunc1(){
    
    var a =50;
   
   ( function(){
   console.log(a);
   var a =1000;
   console.log(a)
   
   })();
   
   }
   myfunc1()