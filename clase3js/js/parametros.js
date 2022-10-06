//ubicamos el elemento dentro del DOM
const caja = document.getElementById('caja');
const colorPicker = document.getElementById('colorPicker')

//declaramos función de control / con parametros
function pintar( codigoColor) 
{
    caja.style.backgroundColor = codigoColor;
}

function pintarInput()
{
    let codigoColor = colorPicker.value;
    caja.style.backgroundColor = codigoColor;
}
