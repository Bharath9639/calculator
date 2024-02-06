function turnoff(){
    var inputfield=document.getElementById("inputfield")
    inputfield.style.visibility="hidden"
}
function turnon(){
    var inputfield=document.getElementById("inputfield")
    inputfield.style.visibility="visible"
}

function getvalues(num){
    var inputfield=document.getElementById("inputvalue"),value
    console.log(inputvalue.value);
    inputvalue.value=inputvalue.value+num   
}
function clearonchar(){
    inputvalue.value= inputvalue.value.slice(0,-1)
}
function clearall(){
    inputvalue.value=""
}
function claculate(){
    inputvalue.value=eval(inputvalue.value)
}
