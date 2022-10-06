//ubicar el elemento dentro del DOM 
const txt = document.querySelector('#txt');

/* 20:23:46 */ 
function reloj ()
{
    //creamos un objeto de fecha 
    let fecha = new Date();

    //obtenemos el numero de las horas

    let horas = fecha.getHours();
    

    //obtenemos el numero de los minutos
    let minutos = fecha.getMinutes();

    if ( horas < 10) {
        horas = '0' + horas;
        }

    if ( minutos < 10) {
        minutos = '0' + minutos;
        }

    //obtenemos el numero de los segundos 
    let segundos = fecha.getSeconds();
   
    if ( segundos < 10) {
    segundos = '0' +segundos;
    }


    //imprimimos dentro del span
    txt.innerText =  `${horas}:${minutos}:${segundos}`
    ;
}


//invocamos la funcion reloj
reloj();

//actualizamos llamado a la funcion reloj
setInterval( reloj )