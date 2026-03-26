a = Number(prompt("ingresa el numero del dia a verificar"))

if(a == 6 || a == 7){
    alert("fin de semana")
}else if(a >= 1 && a < 6){
    alert("dia comun")
}else{
    alert("dato invalido")
}