a = Number(prompt("ingrese la cantidad en grados celsius: "))
c = Number(prompt("a que lo quieres convertir: \n1) celsius\n2) farenheits"))
switch (c){ 
    case 1: 
        alert("el resultado de su operacion es: " + ((a * 9/5) + 32) + " °F")
    case 2:
        alert("el resultado de su operacion es: " + (k = a + 273.15) + " K")
    default:
        alert("dato invalido")
}