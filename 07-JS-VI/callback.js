function decirHolaAlUsuario(usuario) {
    return 'Hola ' + usuario + '!';
}

function decirAdiosAlUsuario(usuario) {
    return 'Adiós ' + usuario + '!';
}

function crearSaludo(usuario, cb) {
    return cb(usuario);
}

//console.log(decirHolaAlUsuario('Harold'))//

console.log(crearSaludo('Harold', decirHolaAlUsuario)); 
console.log(crearSaludo('Harold', decirAdiosAlUsuario)); 

