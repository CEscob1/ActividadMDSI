const Usuario = require('./Usuario');

class GestorUsuarios {
    constructor() {
        this.usuarios = [];
    }

    crearUsuario(nombre, userName, password, email) {
        const nuevoUsuario = new Usuario(nombre, userName, password, email);
        this.usuarios.push(nuevoUsuario);
        return nuevoUsuario;
    }

    autenticarUsuario(userName, password) {
        const usuario = this.usuarios.find(u => u.userName === userName && u.password === password);
        return usuario !== undefined;
    }
}

module.exports = GestorUsuarios;
