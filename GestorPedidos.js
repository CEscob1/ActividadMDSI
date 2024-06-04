const Pedido = require('./Pedido');

class GestorPedidos {
    constructor() {
        this.pedidos = [];
    }

    agregarPedido(pedido) {
        this.pedidos.push(pedido);
    }

    editarPedido(idPedido, datosActualizados) {
        const index = this.pedidos.findIndex(p => p.idPedido === idPedido);
        if (index !== -1) {
            this.pedidos[index] = { ...this.pedidos[index], ...datosActualizados };
        }
    }

    listarPedidos() {
        return this.pedidos;
    }

    eliminarPedido(idPedido) {
        this.pedidos = this.pedidos.filter(p => p.idPedido !== idPedido);
    }
}

module.exports = GestorPedidos;
