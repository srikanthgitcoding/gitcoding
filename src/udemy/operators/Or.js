console.log(undefined || null) // null undefined is falsy value so in second operand no short circuting
console.log(0 || "jonas")
console.log(0 && "jonas");
console.log(true | "ssss")
console.log(" " || "not empty")
console.log([] || {})

//how eexactly it works

// it will always look for truthy value in chain of operatons 

