
let humanoRobot = prompt("¿Es usted humano? Responda SI o NO");


if (humanoRobot == "SI"){
    alert ("Bienvenido humano");
}

else if (humanoRobot == "NO"){
    alert ("Eres un señor robot");
}

else {
    alert ("Respuesta incorrecta");
}




alert ("Horarios de 9:00 a 12:00 A.M. Recuerde que los turnos son cada 30 minutos");

let pacientes = prompt("Ingresar un horario ");
while(pacientes != "ESC" ){
   switch (pacientes) {
        case "09:00":
            alert("Paciente Aitor Tilla");
            break;
        case "09:30":
            alert("Paciente Alex Namana");
            break;
        case "10:00":
            alert("Paciente Esteban Quito");
            break;
        case "10:30":
            alert("Paciente Rigoberto Celestino");
            break;
        case "11:00":
            alert("Paciente Dominga Rodriguez");
            break;
        case "11:30":
            alert("Paciente Armando Paredes");
            break;
        case "12:00":
            alert("Paciente Ramiro Perez");
            break;
       default:
           alert("El horario ingresado no esta en la lista de turnos")
           break;
   }

   pacientes = prompt("Ingresar un horario");

   if (pacientes == "null" || pacientes == "esc");{
    break;
   }

}




const impStreamings = 1.74;

alert ("Calculador de impuestos al servicio de streaming ingrese el monto deseado a calcular brindado por la pagina de Netflix, Amazon, HBO Max");

let precio = prompt ("Ingrese el monto a calcular EJ: 1000");

let total = precio * impStreamings;

alert ("Tu precio final es de: $" + total);
