// // Basic function with three parameters that logs the sum of all the parameters
// function argCheck(parameter1, parameter2, parameter3){
//     console.log(parameter1 + parameter2 + parameter3);
//   }
  
//   // Function with extra arguments
//   argCheck(1,2,3,4);
//   // Logs 6 (1 + 2 + 3, ignores 4)
  
//   // Function with missing arguments
//   argCheck(1,2);
//   // Logs NaN because by default if a corresponding argument is missing, it is set to undefined. 
//   // parameter3 is assigned undefined and so 1+2+undefined = NaN
  
//   // Note that, no error is thrown

  function argumentVar(parameter1, parameter2, parameter3){
    console.log(arguments.length); // Logs the number of arguments passed.
    console.log(arguments[3]); // Logs the 4th argument. Follows array indexing notations. 
  }
  
  argumentVar(1,2,3,4,5);


  function fn(...params){
      console.log("params", params)
  }
var arr  = [1,2,3,3,3,3,3,3]
  fn(...arr)
  