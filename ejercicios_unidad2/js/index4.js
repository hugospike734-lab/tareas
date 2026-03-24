document.body.style.backgroundColor = "yellow";
a = parseInt(prompt("ingresa la primera nota: "))
b = parseInt(prompt("ingresa la segunda nota: "))
c = parseInt(prompt("ingresa la tercera nota: "))
p = (a + b + c) / 3
if(p >= 60){
    alert("aprobado, tu promedio es: "+ p)
}else{
    alert("reprobado, tu promedio es: " + p)
}