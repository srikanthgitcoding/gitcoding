var obj = {
    name: {
        firstNmae :"srikanth"
    },
    familyDetails : {
        biggestInFamily :{
            father :"xyz"
        }
    }
}

// in the above object in order fetch father data we have add few checks 
//first object contains familyDetails - next familyDetails contains biggestInFamily
//next biggestInFamily contains father 
// if father doesnt exists fall back to "nothing available"

var ob = obj.familyDetails && obj.familyDetails.biggestInFamily && obj.familyDetails.biggestInFamily.father || "nothing available"

console.log(ob)
// the solution for above is optional chaining

var oc = obj?.familyDetails?.biggestInFamily?.father1
console.log(oc)