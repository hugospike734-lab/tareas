document.body.style.backgroundColor = "orange";
a = prompt("ingresa una edad: ")
if(a >= 0 &&a <= 2){
    alert("Es un bebé")
}else if(a >= 3 && a <= 12){
    alert("Es un niño")
}else if(a >= 13 && a <= 17){
    alert("Es un adolecente")
}else if(a >= 18 && a <= 64){
    alert("Es un adulto")
}else if( a >= 65){
    alert("Es un adulto mayor")
}