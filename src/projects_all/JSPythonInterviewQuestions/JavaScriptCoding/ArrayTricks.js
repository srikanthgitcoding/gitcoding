//random index
// --------------------------------------------------
var hom = [1,2]
hom[10] = "relatives"
console.log("Add element at random index", hom)

// ---------------------------------------------------

//negative index
var index = [1,2,3,4]
index[-2] = 2
index["dude"] = "dude"
console.log(index)

// ---------------------------------------------------
var family = ["Dad","Mom","ElderBrother","you"]

family.unshift("Dad's GF")
console.log(family)

family.unshift("G faa", "G maa") 
console.log(family)

family.push("younger son")
console.log(family)
// ---------------------------------------------------

// check if Dad is at home

var home = ["Dad","Mom","ElderBrother","you"]
console.log(home.indexOf("Dad"))
console.log(home.indexOf("Mom"))
console.log(home.indexOf("G faa"))

//-----------------------------------------------------
