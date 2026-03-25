n = Number(prompt("ingresa el primer numero: "))
b = Number(prompt("ingresa el segundo numero: "))
a = Number(prompt("menu operaciones basicas\n1) suma \n2) resta\n3) multiplicacion\n4) division"))
switch (a){
    case 1:
        alert("el resultado de la operacion es: " + (n + b))
        break;
    case 2:
       alert("el resultado de la operacion es: " + (n - b))
       break;
    case 3:
        alert("el resultado de la operacion es: " + (n * b))
        break;
    case 4:
        if(b == 0){
        alert("dato invalido, no se puede dividir entre 0")
        }else{
        alert("el resultado de la operacion es: " + (n / b))    
        }
        break;
    default: 
        alert("opcion invalida")
}