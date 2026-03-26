a = Number(prompt("Ingresa el número de mes"))

if(a == 1 || a== 3 || a== 5 || a== 7 || a== 8 || a== 10 || a == 12){
    alert("Este mes tiene 31 días")
}else if(a < 1 || a > 12){
    alert("dato invalido")
}else{
    alert("No tiene 31 días")
}