const params = {
    base: {
        demand: true,
        alias: 'b'
    },
    hasta: {
        alias: 'h',
        default: 10
    }
};

const argv = require('yargs')
    .command('listar','Imprime en consola la tabla de multiplicar', params )
    .command('crear','Crea archivo con la tabla de multiplicar', params )    
    .argv

module.exports = {
    argv
}