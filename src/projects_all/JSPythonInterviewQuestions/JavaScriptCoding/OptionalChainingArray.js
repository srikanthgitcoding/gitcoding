var obj = {
    name: {
        firstNmae :"srikanth"
    },
    familyDetails : [
        {
        biggestInFamily :{
            father :"xyz"
        }
        }
    ]
}

var ob = obj.familyDetails && obj.familyDetails.length && obj.familyDetails[0] && obj.familyDetails[0].biggestInFamily
console.log("obj", ob)

// the above code can be consied this way

var oc = obj?.familyDetails?.[1]?.biggestInFamily
console.log("oc", obj.familyDetails)