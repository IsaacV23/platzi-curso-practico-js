function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(function(valorAcumulado = 0,nuevoElemento){
     return valorAcumulado + nuevoElemento;
    });
    const promedioLista = sumaLista/lista.length;
    return promedioLista;
};

const lista = [
500,
200,
100,
4000000,
];

const lista2 = lista.sort();

const mitadLista1 = parseInt(lista.length / 2) ;

function espar(numero){
if (numero % 2 === 0) {
    return true;
}else {
    return false;
}
};

let mediana;


function calcularMediana(lista){
    const lista3 = lista.sort();
    if (espar(lista3.length)) {
        const elemento1 = lista3[mitadLista1 - 1];
        const elemento2 = lista3[mitadLista1];
    
        const promedioelemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2,
        ]);
        mediana = promedioelemento1y2;
        return mediana;
        
    }else{
    mediana = lista3[mitadLista1];
    return mediana;
    }
;}
