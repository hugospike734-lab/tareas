document.body.style.backgroundColor = "purple"
a = Number(prompt("ingresa el numero del dia que desees ver: "))

switch (a){
    case 1:
        alert("Dia lunes")
        break;
    case 2:
        alert("Dia martes")
        break;
    case 3:
        alert("Dia miercoles")
        break;
   case 4:
    alert("Dia jueves")
        break;
    case 5:
        alert("Dia viernes")
        break;
    case 6:
        alert("Dia sabado")
        break;
    case 7:
        alert("Dia domingo")
        break;
    default:
        alert("dato invalido")
        break;
}