document.body.style.backgroundColor = "green";
a = prompt("ingresa el precio del producto")

if(a >= 100){
    alert("el total a pagar con 15% de descuento es: " + (a * 0.85))
}else{
    alert("el total a pagar sin descuento es: " + a)
}