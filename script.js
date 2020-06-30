document.getElementById("display").value = 0
function press(val){
    if(document.getElementById("display").value==0){
        document.getElementById("display").value=""
    }
    document.getElementById("display").value = document.getElementById("display").value + val
}
function clearValue(){
    document.getElementById("display").value = 0
}
//Modern Calculator Function
function equalValue(){
    var initialvalue = document.getElementById("display").value
    try {
        var result = eval(initialvalue)
    document.getElementById("display").value = result
    } catch (error) {
        document.getElementById("display").value = "ERROR"+"  Please press Clear Button" 
    }
}