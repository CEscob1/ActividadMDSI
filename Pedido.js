class Pedido {
    constructor(idPedido, nombreRemitente, tipoPedido, descripcion, fechaEntrega, fechaRecoleccion, cantidadArticulos, costo) {
        this.idPedido = idPedido;
        this.nombreRemitente = nombreRemitente;
        this.tipoPedido = tipoPedido;
        this.descripcion = descripcion;
        this.fechaEntrega = fechaEntrega;
        this.fechaRecoleccion = fechaRecoleccion;
        this.cantidadArticulos = cantidadArticulos;
        this.costo = costo;
    }

    getIdPedido() {
        return this.idPedido;
    }

    setIdPedido(idPedido) {
        this.idPedido = idPedido;
    }

    getNombreRemitente() {
        return this.nombreRemitente;
    }

    setNombreRemitente(nombreRemitente) {
        this.nombreRemitente = nombreRemitente;
    }

    getTipoPedido() {
        return this.tipoPedido;
    }

    setTipoPedido(tipoPedido) {
        this.tipoPedido = tipoPedido;
    }

    getDescripcion() {
        return this.descripcion;
    }

    setDescripcion(descripcion) {
        this.descripcion = descripcion;
    }

    getFechaEntrega() {
        return this.fechaEntrega;
    }

    setFechaEntrega(fechaEntrega) {
        this.fechaEntrega = fechaEntrega;
    }

    getFechaRecoleccion() {
        return this.fechaRecoleccion;
    }

    setFechaRecoleccion(fechaRecoleccion) {
        this.fechaRecoleccion = fechaRecoleccion;
    }

    getCantidadArticulos() {
        return this.cantidadArticulos;
    }

    setCantidadArticulos(cantidadArticulos) {
        this.cantidadArticulos = cantidadArticulos;
    }

    getCosto() {
        return this.costo;
    }

    setCosto(costo) {
        this.costo = costo;
    }
}

module.exports = Pedido;
