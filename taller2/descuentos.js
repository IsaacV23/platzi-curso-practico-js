const precioOriginal = 120;
const descuento = 18;

function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioDescuento = 100 - descuento;
    const precioConDescuento = (precio* porcentajePrecioDescuento)/100;

    return precioConDescuento;

};

function calcular(){
    const precio = document.getElementById("price").value;
    const descuento = document.getElementById("discount").value;

    const precioConDescuento = calcularPrecioConDescuento(precio,descuento);
    const mensaje = document.getElementById("resultado");
    //ASIGNO EL VALOR AL ID DEL HTML
    mensaje.innerText = "el precio con descuento son: $"+precioConDescuento;
};



// console.log({
// precioOriginal,
// descuento,
// porcentajePrecioDescuento,
// precioConDescuento,
// });