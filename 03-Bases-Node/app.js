const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

/*
En terminal/cmd:
node app listar -b 3 -l 15
*/


// console.log(process.argv);
// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}