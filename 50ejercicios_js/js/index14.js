a = Number(prompt("ingresa la nota a verificar"))

if(a >= 60 && a <= 100){
    alert("aprobado")
}else if(a >= 0 && a < 60){
    alert("no aprobado")
}else{
    alert("dato invalido")
}