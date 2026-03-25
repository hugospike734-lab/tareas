a = Number(prompt("elige una figura \n1) cuadrado\n2) triangulo\n3) rectangulo"))
switch(a){
    case 1:
     c = Number(prompt("ingrese el lado del cuadrado: "))
     alert("el area del cuadrado es: " + (l = c * c))
     break;
    case 2:
     j = Number(prompt("ingrese la base del triangulo: "))
     i = Number(prompt("ingrese la altura del triangulo: "))
     alert("el area del triangulo es: "+ ((j * i) / 2))
     break;
    case 3:
     o = Number(prompt("ingrese la base del rectangulo: "))
     v = Number(prompt("ingrese la altura del rectangulo: "))
     alert("el area del rectangulo es: " + (m = o * v))
     break;
    default:
     alert("dato invalido")
}