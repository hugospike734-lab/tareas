document.body.style.backgroundColor = "red"
a = Number(prompt("digita el mes que deseas ver: \n(a que estacion pertenece)"))

switch (a){
    case 1:
        alert("enero pertenece a : Invierno")
        break;
    case 2:
        alert("febrero pertenece a : Invierno")
        break;
    case 3:
        alert("marzo pertenece a : Primavera")
        break;
   case 4:
        alert("abril pertenece a : Primavera")
        break;
    case 5:
        alert("mayo pertenece a : Primavera")
        break;
    case 6:
        alert("junio pertenece a : Verano")
        break;
    case 7:
        alert("julio pertenece a : Verano")
        break;
    case 8:
        alert("agosto pertenece a : Verano")
        break;
    case 9:
        alert("septiembre pertenece a : Otoño")
        break;
    case 10:
        alert("octubre pertenece a : Otoño")
        break;
    case 11:
        alert("noviembre pertenece a : Otoño")
        break;
    case 12:
        alert("diciembre pertenece a : Invierno")
        break;
    default:
        alert("dato invalido")
        break;
}