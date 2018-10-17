// requireds
const fs = require('fs');

let createFile = ( base, hasta ) => {
    return new Promise((resolve, reject) => {
        multiplicar(base, hasta)
            .then(string => {
                fs.writeFile('tablas/' + base +  '.txt', string, (err) => {
                    if (err) {
                        return reject(err)
                    } else {
                        return resolve(`El archivo ha sido creado`);
                    }
                });
            })
            .catch(error => {
                return reject(error);
            })                
    })
}
let showData = (base, hasta) => {
    return new Promise((resolve, reject) => {
        multiplicar(base, hasta)
            .then(string => {
                return resolve(string)
            })
            .catch(error => {
                return reject(error)
            })
    })
}

let multiplicar = (base, hasta) => {
    return new Promise((resolve, reject) => {
        if (isNaN(base)){
            return reject(`La base ${base} no es un número`);
        }
        if (isNaN(hasta)){
            return reject(`El dato proporcionado ${hasta} no es válido.`);
        }
        let string = ``;
        for(let i = 1; i <= hasta; i++){
            string += `${i} x ${base} = ${i * base}\r\n`;
        }
        return resolve(string);
    })
}

module.exports = {
    crearArchivo:createFile,
    mostrarInfo:showData
}
