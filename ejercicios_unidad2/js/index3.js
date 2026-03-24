document.body.style.backgroundColor = "blue";
a = prompt("ingresa tu peso (kg) : ")
b = prompt("ingresa tu altura (m) : ")
imc = a / (b * b)

if(imc > 25){
    alert("tienes sobrepeso")
}else{
    alert("peso aceptable")
}