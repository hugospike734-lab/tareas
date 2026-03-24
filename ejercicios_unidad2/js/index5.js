document.body.style.backgroundColor = "purple";
a = prompt("ingresa un año: ")

if(a % 4 == 0 && a % 100 != 0 || a % 400 == 0){
    alert("el año Si es biciesto")
}else{
    alert("el año No es biciesto")
}