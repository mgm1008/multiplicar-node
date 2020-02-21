// requieres

const fs = require('fs');
var colors = require('colors');

// const fs = require('fs'); ya los trae node
// const fs = require('express'); paquetes no nativos hechos por otras personas
// const fs = require('./fs'); qrchivos hechos por nosotros mismos

let listarTabla = (base, limite = 10) => {

    console.log('================'.green);
    console.log(`tabla de ${base}`.green);
    console.log('================'.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base}*${i}=${base*i}`);
    }
}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido de la base: ${base} no es un numero`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducido del limite: ${limite} no es un numero`);
            return;
        }


        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base}*${i}=${base*i}\n`;
        }

        //const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err) reject(err)
            else resolve(`tabla-${base}.txt`)
        });

    });


}

module.exports = {
    crearArchivo,
    listarTabla
}