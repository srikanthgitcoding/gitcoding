var parent = function(parentName){
    this.parentName = parentName
}

parent.prototype.getName = function(){
    return this.parentName
}

var parentObjRef = new parent("shankar")
//---

var child = function(childName){
    this.childName = childName
}

child.prototype = parentObjRef

var childObjRef = new child("srikanth")

console.log("---",childObjRef.getName())

