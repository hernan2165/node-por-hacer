const fs = require('fs'); //archivo fs

let listadosporhacer = []; //arrglo

const guardarDB = () => { //una constante llamada db que guarda los datos de lista de porhacer
    let data = JSON.stringify(listadosporhacer); //trnasforma un obeto a un json totalmente valido
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('no se puedo grabar');
    });
}

const cargarDb = () => {

    try {
        listadosporhacer = require('../db/data.json');
    } catch (err) {
        listadosporhacer = [];
    }


}

const crear = (descripcion) => { //una funcion llamada descripcion

    let porHacer = {
        descripcion, //descripcion es igual a descripcion
        completado: false

    };
    listadosporhacer.push(porHacer);

    guardarDB(); //llamamos a la funcion
    return porHacer;
}

const getlistado = () => {
    cargarDb(); //llamamos a la bs y le imprimos la nueva informacion asi vamos a tener mas datos
    return listadosporhacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDb();
    let index = listadosporhacer.findIndex(tarea => tarea.descripcion === descripcion)
    if (index >= 0) {
        listadosporhacer[index].completado = completado
        guardarDB();
        return true;
    } else {
        return false;
    }
}


const borrar = (descripcion) => {
    cargarDb();
    let nuevolistado = listadosporhacer.filter(tarea => {
        return tarea.descripcion != descripcion
    });
    if (listadosporhacer.length === nuevolistado.length) {
        return false;
    } else {
        listadosporhacer = nuevolistado;
        guardarDB();
        return true;
    }


}

module.exports = { //exportamos la funuion crear
    crear,
    getlistado,
    actualizar,
    borrar
}