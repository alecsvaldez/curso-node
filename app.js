let colors = require('colors');
const {argv} = require('./config/yargs');
const {crearArchivo,mostrarInfo} = require('./multiplicar/multiplicar');
let process = argv._;

// console.log(process);return;

if (process == 'crear'){
    console.log(`Creando tabla del ${argv.base} hasta el ${argv.hasta}`.blue.bgYellow);
    crearArchivo(argv.base, argv.hasta)
        .then(result => {
            console.log(`Éxito! ${result}`.green)
        })
        .catch(error => {
            console.log(error);
        });
} else if (process == 'listar'){
    console.log(`Mostrando tabla del ${argv.base} hasta el ${argv.hasta}`.black.bgWhite);
    mostrarInfo(argv.base, argv.hasta)
        .then(result => {
            console.log(`${result}`.green)
        })
        .catch(error => {
            console.log(error);
        });
}


