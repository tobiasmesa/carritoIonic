const productoN = document.querySelector('#producto');
const productoP = document.querySelector('#productoP');
const buttonAgr = document.querySelector('#buttonAgr');
const buttonBor = document.querySelector('#buttonBor');
const listaProd = document.querySelector('#lista-prod');
const totalMostrar = document.querySelector('#total');
const carrito = document.querySelector('#carrito');

var total = 0;

totalMostrar.textContent = total;

const vaciarCarrito = () => {
    totalMostrar.textContent = 0;
}

carrito.addEventListener('click', vaciarCarrito);

const crearNuevoProducto = (nombre,precio) => {
    const ionCard = document.createElement('ion-card'); 

    
    const nuevoProducto = document.createElement('ion-card-content');
    nuevoProducto.textContent = nombre + ': $' + precio;



    ionCard.appendChild(nuevoProducto);
    listaProd.appendChild(ionCard);
}

const borrarForm = () => {
    productoN.value = ''; 
    productoP.value = '';

}

buttonBor.addEventListener('click', borrarForm);

const mostrarAlerta = () => {
    const alerta = document.createElement('ion-alert')
    alerta.header = 'Datos invalidos'; 
    alerta.subHeader = 'Verificar datos';
    alerta.message  = 'Nombre o precio incorrecto'; 
    alerta.buttons = ['Ok'];
    
    document.body.appendChild(alerta); 
    return alerta.present();
}



const isEmpty = str => !str.trim().length; /// VALIDAR DATOS 

buttonAgr.addEventListener('click', () => {
    
    const nombre = productoN.value;
    const precio = productoP.value;


    if(isEmpty(nombre) || isEmpty(precio) || precio <= 0 ){
        
        mostrarAlerta();
        return; 
    } 

    crearNuevoProducto(nombre, precio);
    total += +precio;

    totalMostrar.textContent = total;

    borrarForm();

})

