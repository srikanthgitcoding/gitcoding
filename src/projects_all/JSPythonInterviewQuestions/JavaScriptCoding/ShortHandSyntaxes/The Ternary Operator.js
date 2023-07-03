//Longhand

const x = 20;
let answer;

if (x > 10) {
    answer = "greater than 10";
} else {
    answer =  "less than 10";
}

if (x > 10) {
    answer = "greater than 10";
} else if (x > 20) {
    answer =  "less than 20";
}
else if (x > 30) {
    answer =  "less than 30";
}
else if (x > 40) {
    answer =  "less than 40";
}else{
    answer = "--"
}



//Shorthand:

const answer = x > 10 ? "greater than 10" : "less than 10";

const answer = x > 10 ? "less than 10" : x > 20 ? "less han 20" : x > 30 ? "less than 30" : "sample"
