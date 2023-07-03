var x = 5

var fn = function(){
    (function(){
    console.log(x)
    var x= 15
    })();

}

fn()


var x = 5

var fn = function(){
    (function(){
        var x;
    console.log(x)
    var x= 15
    })();

}

fn()