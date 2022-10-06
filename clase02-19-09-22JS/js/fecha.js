 //ubicamos elemento dentro del DOM
const txt = document.getElementById('txt');

/*
    Mostrar la fecha
    formato Lun 19 Sep 19/09/2022
*/ 

// creamos un objeto de fecha
let fecha = new Date();

// Obetener el numero del dia de la semana 
// Dom - 0/
//Lun - 1
//Mart - 2
let diaSemana = fecha.getDay();
console.log(diaSemana);

switch (diaSemana){
case 0: 
diaSemana = 'Domingo';
break;

case 1: 
diaSemana = 'Lunes';
break;

case 2:
    diaSemana = 'Martes';
    break;

case 3:
    diaSemana = 'Miércoles';
    break;

    case 4:
    diaSemana = 'Jueves';
    break;

    case 5:
    diaSemana = 'Viernes';
    break;

    default:
    diaSemana = 'Sábado';
    break;

}


// Obtenemos el numero del dia del mes
let diaMes = fecha.getDate();
if ( diaMes < 10) {
    diaMes = '0' + diaMes;
}

// Obtenemos el numero del mes actual
let mes = fecha.getMonth()+1;
if ( mes < 10) {
    mes = '0' + mes;
}

// Obtenemos el numero del año
let anio = fecha.getFullYear();



//Imprimimos desntro del span CONCATENANDO
//txt.innerText = diaSemana + ' ' + diaMes + '/' + mes + '/' + anio;

//Template Literal 
// mostrar información sin tener que concatenar (bactick ${nVariable})
txt.innerText = `${diaSemana} ${diaMes}/${mes}/${anio}`;
