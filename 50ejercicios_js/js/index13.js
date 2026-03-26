a = Number(prompt("ingresa una hora (0 -23)"))

if(a >= 0 && a < 12){
    alert("Es AM")
}else if(a >= 12 && a <= 23){
    alert("es pm")
}else{
    alert("dato invalido")
}