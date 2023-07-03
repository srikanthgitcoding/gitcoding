for (let i = 1; i <= 3; i++) {
    (function(index){
        setTimeout(function() { 
            console.log(index); 
        },0);
    })(i)    

}