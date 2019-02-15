const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripcion de tarea por hacer'
};
const completado = {
    default: true,
    alias: 'c',
    desc: '  Marca como completado o pendiente la tarea'
};




const argv = require('yargs')
    .command('crear', 'crea un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'actualizar el estado completo de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'borra un elemento', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}