
var dupliactes = [10,20,20,20,301,2,3,4,4,5,5,5,9]

new_arr = []
for (var i=0; i<dupliactes.length;i++){
    if (new_arr.indexOf(dupliactes[i]) <= -1){
        new_arr.push(dupliactes[i])
    }
}
console.log("dupliacte elements removed",new_arr)