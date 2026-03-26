a = Number(prompt("ingresa el primer numero: "))
b = Number(prompt("ingresa el segundo numero: "))
if(a > b){
    alert("El numero mayor es: " + a)
}else if(b > a){
    alert("el numero mayor es: " + b)
}else if(a == b){
    alert("los numeros son iguales")
}else{
    alert("error, has ingresado una letra")
}