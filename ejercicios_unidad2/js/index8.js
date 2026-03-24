document.body.style.backgroundColor = "gray";
a = parseInt(prompt("ingresa un temmperatura en grados celsius: "))
b = parseInt(prompt("convertir a \n1) fahrenheit\n2) kelvin"))

if(b == 1){
    alert(a +" °C convertido a fahrenheit es: "+ ((a * 9/5) + 32) + " °F")
}else if(b == 2){
    alert(a +" °C convertido a Kelvin es: "+ (a + 273.15) + " °K")
}