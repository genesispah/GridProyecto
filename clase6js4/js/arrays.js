const marcas = [ 
                    'Hermes', 'Zara', 'Boss', 
                    'Aeropostale', 'Tommy', 'Hollister'
               ];
console.log( marcas );

//document.write( marcas ); aparece todas las marcas en pantalla

const dias = [ 'domingo', 'lunes', 'martes', 
               'miércoles', 'jueves', 'Viernes',
               'sábado' 
            ];

const txt = document.querySelector('#txt');

//obtener el numero del dia de la semana
// creamos objeto fecha
let fecha = new Date();
//obtenemos el número del día de la semana
let diaSemana = fecha.getDay();

//imprimimos en el span
txt.innerText = dias[diaSemana];
