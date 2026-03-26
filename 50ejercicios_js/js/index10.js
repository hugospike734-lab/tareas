a = prompt("===== verificacion de division =====\ningresa el primer numero")
b = prompt("ingresa el segundo numero")

if(b === 0){
    alert("El primer numero _NO_ es divisible por el segundo")
}else if(a % b === 0){
    alert("si es divisible")
}else{
    alert("no es divisible")
}