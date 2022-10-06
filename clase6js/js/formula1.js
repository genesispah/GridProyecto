//Ubicar elemtos dentro del DOM
//const redbull = document.getElementById('redbull');
const redbull = document.querySelector('#redbull'); // lleva # para q no lea como css
const ferrari = document.querySelector('#ferrari');
const mercedes = document.querySelector('#mercedes');
const mclaren = document.querySelector('#mclaren');

//estado incial
ferrari.style.display = 'none';
//ferrari.style.visibility = 'hidden'; // deja el espacio en blanco cuando queremos ocultar, no sirve este
mercedes.style.display = 'none';
mclaren.style.display = 'none';

//funcion de control
function mostrarOcultar(team) 
{
    if ( team == 'redbull') {
        redbull.style.display = 'flex';
        ferrari.style.display ='none';
        mercedes.style.display ='none';
        mclaren.style.display ='none';

    }
    else if ( team == 'ferrari'){

        redbull.style.display = 'none';
        ferrari.style.display ='flex';
        mercedes.style.display ='none';
        mclaren.style.display ='none';

    }
    else if( team == 'mercedes') {
    redbull.style.display = 'none';
    ferrari.style.display ='none';
    mercedes.style.display ='flex';
    mclaren.style.display ='none';
}
else if (team == "mclaren") {
    redbull.style.display ='none'
    ferrari.style.display ='none'
    mercedes.style.display ='none'
    mclaren.style.display ='flex'

}
}