let school = {
    name : "Vivekananda School",
    location : "Delhi",
    established : "1971"
}

// Add or Delete Elements To object ujsing 2 ways 
// 1) Using dot notation 
// 2)Using square bracket notation:

// Adding
school.teachers = ["sree","monkey"]
school["Activities"] = "crickets"
console.log(school)

//Delete
delete school.teachers;

if (school.hasOwnProperty('Activities'))
    delete school['Activities'];

console.log(school)


//to verify before deleting if key exist




