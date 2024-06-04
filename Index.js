const readline = require('readline');
const GestorUsuarios = require('./GestorUsuarios');
const GestorPedidos = require('./GestorPedidos');
const Pedido = require('./Pedido');

const gestorUsuarios = new GestorUsuarios();
const gestorPedidos = new GestorPedidos();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const mainMenu = () => {
    console.log('\n1. Crear Usuario');
    console.log('2. Autenticar Usuario');
    console.log('3. Agregar Pedido');
    console.log('4. Editar Pedido');
    console.log('5. Listar Pedidos');
    console.log('6. Eliminar Pedido');
    console.log('7. Salir');
    rl.question('Seleccione una opción: ', (option) => {
        switch (option) {
            case '1':
                crearUsuario();
                break;
            case '2':
                autenticarUsuario();
                break;
            case '3':
                agregarPedido();
                break;
            case '4':
                editarPedido();
                break;
            case '5':
                listarPedidos();
                break;
            case '6':
                eliminarPedido();
                break;
            case '7':
                rl.close();
                break;
            default:
                console.log('Opción no válida');
                mainMenu();
                break;
        }
    });
};

const crearUsuario = () => {
    rl.question('Nombre: ', (nombre) => {
        rl.question('UserName: ', (userName) => {
            rl.question('Password: ', (password) => {
                rl.question('Email: ', (email) => {
                    gestorUsuarios.crearUsuario(nombre, userName, password, email);
                    console.log('Usuario creado');
                    mainMenu();
                });
            });
        });
    });
};

const autenticarUsuario = () => {
    rl.question('UserName: ', (userName) => {
        rl.question('Password: ', (password) => {
            const autenticado = gestorUsuarios.autenticarUsuario(userName, password);
            console.log(`Autenticado: ${autenticado}`);
            mainMenu();
        });
    });
};

const agregarPedido = () => {
    rl.question('ID del pedido: ', (idPedido) => {
        rl.question('Nombre del remitente: ', (nombreRemitente) => {
            rl.question('Tipo de pedido: ', (tipoPedido) => {
                rl.question('Descripción: ', (descripcion) => {
                    rl.question('Fecha de entrega: ', (fechaEntrega) => {
                        rl.question('Fecha de recolección: ', (fechaRecoleccion) => {
                            rl.question('Cantidad de artículos: ', (cantidadArticulos) => {
                                rl.question('Costo: ', (costo) => {
                                    const pedido = new Pedido(parseInt(idPedido), nombreRemitente, tipoPedido, descripcion, fechaEntrega, fechaRecoleccion, parseInt(cantidadArticulos), parseFloat(costo));
                                    gestorPedidos.agregarPedido(pedido);
                                    console.log('Pedido agregado');
                                    mainMenu();
                                });
                            });
                        });
                    });
                });
            });
        });
    });
};

const editarPedido = () => {
    rl.question('ID del pedido a editar: ', (idPedido) => {
        rl.question('Nueva descripción: ', (descripcion) => {
            gestorPedidos.editarPedido(parseInt(idPedido), { descripcion });
            console.log('Pedido editado');
            mainMenu();
        });
    });
};

const listarPedidos = () => {
    const pedidos = gestorPedidos.listarPedidos();
    console.log('\nPedidos:');
    pedidos.forEach(pedido => {
        console.log(JSON.stringify(pedido, null, 2));
    });
    mainMenu();
};

const eliminarPedido = () => {
    rl.question('ID del pedido a eliminar: ', (idPedido) => {
        gestorPedidos.eliminarPedido(parseInt(idPedido));
        console.log('Pedido eliminado');
        mainMenu();
    });
};

mainMenu();
