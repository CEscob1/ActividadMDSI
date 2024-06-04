class Usuario {
    constructor(nombre, userName, password, email) {
        this.nombre = nombre;
        this.userName = userName;
        this.password = password;
        this.email = email;
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    getUserName() {
        return this.userName;
    }

    setUserName(userName) {
        this.userName = userName;
    }

    getPassword() {
        return this.password;
    }

    setPassword(password) {
        this.password = password;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email) {
        this.email = email;
    }
}

module.exports = Usuario;
