document.body.style.backgroundColor = "red";
a = prompt("ingresa el primer numero: ")
b = prompt("ingresa el segundo numero: ")

if(a > b){
    alert("el numero mayor es: " + a)
}else if(b > a){
    alert("el numero mayor es: " + b)
}else{
    alert("los numeros son iguales")
}